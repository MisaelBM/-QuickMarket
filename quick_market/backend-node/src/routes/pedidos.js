const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/pedidos - Listar pedidos do usuário
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: pedidos, error } = await supabase
    .from('pedidos')
    .select(`
      *,
      mercados:nome,
      itens_pedido:itens_pedido(
        *,
        produtos:nome,
        produtos:preco
      ),
      enderecos_entrega:enderecos_entrega(*),
      pagamentos:pagamentos(*),
      entregas:entregas(*)
    `)
    .eq('usuario_id', usuarioId)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }

  res.json(pedidos);
}));

// GET /api/pedidos/:id - Buscar pedido específico
router.get('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  const { data: pedido, error } = await supabase
    .from('pedidos')
    .select(`
      *,
      mercados:nome,
      itens_pedido:itens_pedido(
        *,
        produtos:nome,
        produtos:preco,
        produtos:imagem_url
      ),
      enderecos_entrega:enderecos_entrega(*),
      pagamentos:pagamentos(*),
      entregas:entregas(*)
    `)
    .eq('id', id)
    .eq('usuario_id', usuarioId)
    .single();

  if (error || !pedido) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }

  res.json(pedido);
}));

// POST /api/pedidos - Criar novo pedido
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { mercado_id, endereco_entrega, observacoes, cupom_id } = req.body;

  if (!mercado_id || !endereco_entrega) {
    return res.status(400).json({ 
      error: 'Mercado e endereço de entrega são obrigatórios' 
    });
  }

  // Buscar itens do carrinho
  const { data: carrinho, error: carrinhoError } = await supabase
    .from('carrinho_usuario')
    .select(`
      *,
      produtos:produtos(
        nome,
        preco,
        menus!inner(mercado_id)
      )
    `)
    .eq('usuario_id', usuarioId);

  if (carrinhoError) {
    return res.status(500).json({ error: 'Erro ao buscar carrinho' });
  }

  if (!carrinho || carrinho.length === 0) {
    return res.status(400).json({ error: 'Carrinho vazio' });
  }

  // Verificar se todos os produtos são do mesmo mercado
  const mercadosProdutos = [...new Set(carrinho.map(item => item.produtos.menus.mercado_id))];
  if (mercadosProdutos.length > 1 || mercadosProdutos[0] !== parseInt(mercado_id)) {
    return res.status(400).json({ error: 'Todos os produtos devem ser do mesmo mercado' });
  }

  // Calcular total
  const subtotal = carrinho.reduce((acc, item) => acc + item.subtotal, 0);
  
  // Buscar taxa de entrega do mercado
  const { data: mercado } = await supabase
    .from('mercados')
    .select('taxa_entrega')
    .eq('id', mercado_id)
    .single();

  const frete = mercado?.taxa_entrega || 0;
  let desconto_aplicado = 0;

  // Aplicar cupom se fornecido
  if (cupom_id) {
    const { data: cupom } = await supabase
      .from('cupons')
      .select('*')
      .eq('id', cupom_id)
      .eq('ativo', true)
      .gte('data_fim', new Date().toISOString().split('T')[0])
      .lte('data_inicio', new Date().toISOString().split('T')[0])
      .single();

    if (cupom && subtotal >= cupom.minimo_pedido) {
      if (cupom.desconto_percentual) {
        desconto_aplicado = (subtotal * cupom.desconto_percentual) / 100;
      } else if (cupom.desconto_valor) {
        desconto_aplicado = cupom.desconto_valor;
      }
    }
  }

  const total = subtotal + frete - desconto_aplicado;

  // Gerar número do pedido
  const numero_pedido = `QMK${Date.now()}${Math.floor(Math.random() * 1000)}`;

  // Criar pedido
  const { data: novoPedido, error: pedidoError } = await supabase
    .from('pedidos')
    .insert([
      {
        usuario_id: usuarioId,
        mercado_id,
        numero_pedido,
        status: 'pendente',
        total,
        frete,
        desconto_aplicado,
        observacoes: observacoes || ''
      }
    ])
    .select()
    .single();

  if (pedidoError) {
    return res.status(500).json({ error: 'Erro ao criar pedido' });
  }

  // Criar itens do pedido
  const itensPedido = carrinho.map(item => ({
    pedido_id: novoPedido.id,
    produto_id: item.produto_id,
    quantidade: item.quantidade,
    preco_unitario: item.preco_unitario,
    customizacoes: item.observacoes ? { observacoes: item.observacoes } : null
  }));

  const { error: itensError } = await supabase
    .from('itens_pedido')
    .insert(itensPedido);

  if (itensError) {
    return res.status(500).json({ error: 'Erro ao criar itens do pedido' });
  }

  // Criar endereço de entrega
  const { error: enderecoError } = await supabase
    .from('enderecos_entrega')
    .insert([
      {
        pedido_id: novoPedido.id,
        usuario_id: usuarioId,
        ...endereco_entrega
      }
    ]);

  if (enderecoError) {
    console.error('Erro ao criar endereço de entrega:', enderecoError);
  }

  // Limpar carrinho
  await supabase
    .from('carrinho_usuario')
    .delete()
    .eq('usuario_id', usuarioId);

  res.status(201).json({
    message: 'Pedido criado com sucesso',
    pedido: novoPedido
  });
}));

// PUT /api/pedidos/:id/status - Atualizar status do pedido
router.put('/:id/status', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const usuarioId = req.user.id;

  const statusValidos = ['pendente', 'confirmado', 'preparo', 'enviado', 'entregue', 'cancelado'];
  
  if (!statusValidos.includes(status)) {
    return res.status(400).json({ error: 'Status inválido' });
  }

  const { data: pedidoAtualizado, error } = await supabase
    .from('pedidos')
    .update({ status })
    .eq('id', id)
    .eq('usuario_id', usuarioId)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar status do pedido' });
  }

  if (!pedidoAtualizado) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }

  res.json({
    message: 'Status do pedido atualizado',
    pedido: pedidoAtualizado
  });
}));

// GET /api/pedidos/status/:status - Buscar pedidos por status
router.get('/status/:status', authenticateToken, asyncHandler(async (req, res) => {
  const { status } = req.params;
  const usuarioId = req.user.id;

  const { data: pedidos, error } = await supabase
    .from('pedidos')
    .select(`
      *,
      mercados:nome
    `)
    .eq('usuario_id', usuarioId)
    .eq('status', status)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }

  res.json(pedidos);
}));

module.exports = router;
