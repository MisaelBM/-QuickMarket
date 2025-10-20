const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/cupons - Listar cupons disponíveis
router.get('/', asyncHandler(async (req, res) => {
  const { ativo = true } = req.query;

  const { data: cupons, error } = await supabase
    .from('cupons')
    .select('*')
    .eq('ativo', ativo === 'true')
    .gte('data_fim', new Date().toISOString().split('T')[0])
    .lte('data_inicio', new Date().toISOString().split('T')[0])
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar cupons' });
  }

  res.json(cupons);
}));

// GET /api/cupons/usuario - Listar cupons do usuário
router.get('/usuario', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: cuponsUsuario, error } = await supabase
    .from('cupons_usuario')
    .select(`
      *,
      cupons:cupons(
        codigo,
        desconto_percentual,
        desconto_valor,
        data_inicio,
        data_fim,
        minimo_pedido
      )
    `)
    .eq('usuario_id', usuarioId)
    .gt('usos_restantes', 0)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar cupons do usuário' });
  }

  res.json(cuponsUsuario);
}));

// POST /api/cupons/validar - Validar cupom
router.post('/validar', authenticateToken, asyncHandler(async (req, res) => {
  const { codigo, valor_pedido } = req.body;
  const usuarioId = req.user.id;

  if (!codigo || !valor_pedido) {
    return res.status(400).json({ error: 'Código do cupom e valor do pedido são obrigatórios' });
  }

  // Buscar cupom
  const { data: cupom, error: cupomError } = await supabase
    .from('cupons')
    .select('*')
    .eq('codigo', codigo.toUpperCase())
    .eq('ativo', true)
    .gte('data_fim', new Date().toISOString().split('T')[0])
    .lte('data_inicio', new Date().toISOString().split('T')[0])
    .single();

  if (cupomError || !cupom) {
    return res.status(404).json({ error: 'Cupom não encontrado ou inválido' });
  }

  // Verificar valor mínimo
  if (valor_pedido < cupom.minimo_pedido) {
    return res.status(400).json({ 
      error: `Valor mínimo do pedido deve ser R$ ${cupom.minimo_pedido.toFixed(2)}` 
    });
  }

  // Verificar se usuário tem este cupom
  const { data: cupomUsuario } = await supabase
    .from('cupons_usuario')
    .select('*')
    .eq('cupom_id', cupom.id)
    .eq('usuario_id', usuarioId)
    .gt('usos_restantes', 0)
    .single();

  if (!cupomUsuario) {
    return res.status(400).json({ error: 'Cupom não disponível para este usuário' });
  }

  // Calcular desconto
  let valorDesconto = 0;
  if (cupom.desconto_percentual) {
    valorDesconto = (valor_pedido * cupom.desconto_percentual) / 100;
  } else if (cupom.desconto_valor) {
    valorDesconto = cupom.desconto_valor;
  }

  // Limitar desconto ao valor do pedido
  valorDesconto = Math.min(valorDesconto, valor_pedido);

  res.json({
    cupom: {
      id: cupom.id,
      codigo: cupom.codigo,
      desconto_percentual: cupom.desconto_percentual,
      desconto_valor: cupom.desconto_valor,
      minimo_pedido: cupom.minimo_pedido
    },
    valor_desconto: valorDesconto,
    valor_final: valor_pedido - valorDesconto
  });
}));

// POST /api/cupons/usar - Usar cupom
router.post('/usar', authenticateToken, asyncHandler(async (req, res) => {
  const { cupom_id, pedido_id } = req.body;
  const usuarioId = req.user.id;

  if (!cupom_id || !pedido_id) {
    return res.status(400).json({ error: 'ID do cupom e ID do pedido são obrigatórios' });
  }

  // Verificar se cupom existe e está válido
  const { data: cupom, error: cupomError } = await supabase
    .from('cupons')
    .select('*')
    .eq('id', cupom_id)
    .eq('ativo', true)
    .single();

  if (cupomError || !cupom) {
    return res.status(404).json({ error: 'Cupom não encontrado' });
  }

  // Verificar se usuário tem este cupom
  const { data: cupomUsuario, error: cupomUsuarioError } = await supabase
    .from('cupons_usuario')
    .select('*')
    .eq('cupom_id', cupom_id)
    .eq('usuario_id', usuarioId)
    .gt('usos_restantes', 0)
    .single();

  if (cupomUsuarioError || !cupomUsuario) {
    return res.status(400).json({ error: 'Cupom não disponível para este usuário' });
  }

  // Atualizar uso do cupom
  const { error: updateError } = await supabase
    .from('cupons_usuario')
    .update({ 
      usos_restantes: cupomUsuario.usos_restantes - 1
    })
    .eq('id', cupomUsuario.id);

  if (updateError) {
    return res.status(500).json({ error: 'Erro ao usar cupom' });
  }

  // Atualizar contador de uso do cupom
  await supabase
    .from('cupons')
    .update({ uso_atual: cupom.uso_atual + 1 })
    .eq('id', cupom_id);

  res.json({ message: 'Cupom utilizado com sucesso' });
}));

// POST /api/cupons/gerar - Gerar cupom para usuário (admin)
router.post('/gerar', authenticateToken, asyncHandler(async (req, res) => {
  const { usuario_id, cupom_id, quantidade = 1 } = req.body;

  if (!usuario_id || !cupom_id) {
    return res.status(400).json({ error: 'ID do usuário e ID do cupom são obrigatórios' });
  }

  // Verificar se cupom existe
  const { data: cupom, error: cupomError } = await supabase
    .from('cupons')
    .select('*')
    .eq('id', cupom_id)
    .single();

  if (cupomError || !cupom) {
    return res.status(404).json({ error: 'Cupom não encontrado' });
  }

  // Verificar se usuário já tem este cupom
  const { data: cupomExistente } = await supabase
    .from('cupons_usuario')
    .select('id')
    .eq('cupom_id', cupom_id)
    .eq('usuario_id', usuario_id)
    .single();

  if (cupomExistente) {
    return res.status(400).json({ error: 'Usuário já possui este cupom' });
  }

  // Criar cupom para o usuário
  const { data: novoCupomUsuario, error } = await supabase
    .from('cupons_usuario')
    .insert([
      {
        usuario_id,
        cupom_id,
        usos_restantes: quantidade
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao gerar cupom' });
  }

  res.status(201).json({
    message: `${quantidade} cupom(ns) gerado(s) com sucesso`,
    cupom_usuario: novoCupomUsuario
  });
}));

module.exports = router;
