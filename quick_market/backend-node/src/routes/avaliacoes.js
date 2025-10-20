const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/avaliacoes - Listar avaliações
router.get('/', asyncHandler(async (req, res) => {
  const { pedido_id, mercado_id, limit = 20, offset = 0 } = req.query;

  let query = supabase
    .from('avaliacoes')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        usuarios:nome
      ),
      mercados:nome
    `);

  if (pedido_id) {
    query = query.eq('pedido_id', pedido_id);
  }

  if (mercado_id) {
    query = query.eq('mercado_id', mercado_id);
  }

  const { data: avaliacoes, error } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }

  res.json(avaliacoes);
}));

// GET /api/avaliacoes/:id - Buscar avaliação específica
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { data: avaliacao, error } = await supabase
    .from('avaliacoes')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        usuarios:nome
      ),
      mercados:nome
    `)
    .eq('id', id)
    .single();

  if (error || !avaliacao) {
    return res.status(404).json({ error: 'Avaliação não encontrada' });
  }

  res.json(avaliacao);
}));

// POST /api/avaliacoes - Criar avaliação
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { pedido_id, mercado_id, nota_estrelas, comentario, nota_entrega } = req.body;

  if (!nota_estrelas || nota_estrelas < 1 || nota_estrelas > 5) {
    return res.status(400).json({ error: 'Nota deve ser entre 1 e 5' });
  }

  if (!pedido_id || !mercado_id) {
    return res.status(400).json({ error: 'Pedido e mercado devem ser especificados' });
  }

  // Verificar se usuário já avaliou este pedido
  const { data: avaliacaoExistente } = await supabase
    .from('avaliacoes')
    .select('id')
    .eq('pedido_id', pedido_id)
    .single();

  if (avaliacaoExistente) {
    return res.status(400).json({ error: 'Você já avaliou este pedido' });
  }

  // Verificar se o pedido pertence ao usuário
  const { data: pedido } = await supabase
    .from('pedidos')
    .select('usuario_id')
    .eq('id', pedido_id)
    .eq('usuario_id', usuarioId)
    .single();

  if (!pedido) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }

  const { data: novaAvaliacao, error } = await supabase
    .from('avaliacoes')
    .insert([
      {
        pedido_id,
        mercado_id,
        nota_estrelas,
        comentario: comentario || '',
        nota_entrega: nota_entrega || null
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao criar avaliação' });
  }

  res.status(201).json({
    message: 'Avaliação criada com sucesso',
    avaliacao: novaAvaliacao
  });
}));

// PUT /api/avaliacoes/:id - Atualizar avaliação
router.put('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;
  const { nota_estrelas, comentario, nota_entrega } = req.body;

  if (nota_estrelas && (nota_estrelas < 1 || nota_estrelas > 5)) {
    return res.status(400).json({ error: 'Nota deve ser entre 1 e 5' });
  }

  const updateData = {};
  if (nota_estrelas) updateData.nota_estrelas = nota_estrelas;
  if (comentario !== undefined) updateData.comentario = comentario;
  if (nota_entrega !== undefined) updateData.nota_entrega = nota_entrega;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: 'Nenhum dado para atualizar' });
  }

  // Verificar se a avaliação pertence ao usuário
  const { data: avaliacao } = await supabase
    .from('avaliacoes')
    .select(`
      id,
      pedidos!inner(usuario_id)
    `)
    .eq('id', id)
    .eq('pedidos.usuario_id', usuarioId)
    .single();

  if (!avaliacao) {
    return res.status(404).json({ error: 'Avaliação não encontrada' });
  }

  const { data: avaliacaoAtualizada, error } = await supabase
    .from('avaliacoes')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar avaliação' });
  }

  res.json({
    message: 'Avaliação atualizada com sucesso',
    avaliacao: avaliacaoAtualizada
  });
}));

// DELETE /api/avaliacoes/:id - Deletar avaliação
router.delete('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  // Verificar se a avaliação pertence ao usuário
  const { data: avaliacao } = await supabase
    .from('avaliacoes')
    .select(`
      id,
      pedidos!inner(usuario_id)
    `)
    .eq('id', id)
    .eq('pedidos.usuario_id', usuarioId)
    .single();

  if (!avaliacao) {
    return res.status(404).json({ error: 'Avaliação não encontrada' });
  }

  const { error } = await supabase
    .from('avaliacoes')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: 'Erro ao deletar avaliação' });
  }

  res.json({ message: 'Avaliação deletada com sucesso' });
}));

// GET /api/avaliacoes/stats/:id - Estatísticas de avaliações
router.get('/stats/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { tipo = 'mercado' } = req.query; // mercado ou pedido

  const campoId = tipo === 'mercado' ? 'mercado_id' : 'pedido_id';

  const { data: avaliacoes, error } = await supabase
    .from('avaliacoes')
    .select('nota_estrelas')
    .eq(campoId, id);

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }

  if (!avaliacoes || avaliacoes.length === 0) {
    return res.json({
      total: 0,
      media: 0,
      distribuicao: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    });
  }

  const total = avaliacoes.length;
  const soma = avaliacoes.reduce((acc, av) => acc + av.nota_estrelas, 0);
  const media = soma / total;

  const distribuicao = avaliacoes.reduce((acc, av) => {
    acc[av.nota_estrelas] = (acc[av.nota_estrelas] || 0) + 1;
    return acc;
  }, {});

  // Garantir que todas as notas de 1 a 5 estejam presentes
  for (let i = 1; i <= 5; i++) {
    if (!distribuicao[i]) {
      distribuicao[i] = 0;
    }
  }

  res.json({
    total,
    media: Math.round(media * 10) / 10,
    distribuicao
  });
}));

module.exports = router;
