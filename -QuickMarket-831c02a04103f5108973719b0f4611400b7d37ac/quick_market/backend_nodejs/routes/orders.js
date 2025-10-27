const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const { authenticateToken } = require('../middleware/auth');

// GET /api/orders - Listar pedidos do usuário
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from('pedidos')
      .select(`
        *,
        itens_pedido (
          id,
          quantidade,
          preco_unitario,
          subtotal,
          produtos:produto_id (
            id,
            nome,
            descricao,
            imagem_url
          )
        )
      `)
      .eq('usuario_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ data: data || [] });
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/orders/:id - Obter pedido específico
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const { data, error } = await supabase
      .from('pedidos')
      .select(`
        *,
        itens_pedido (
          id,
          quantidade,
          preco_unitario,
          subtotal,
          produtos:produto_id (
            id,
            nome,
            descricao,
            imagem_url
          )
        ),
        enderecos_entrega (*),
        pagamentos (*)
      `)
      .eq('id', id)
      .eq('usuario_id', userId)
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/orders - Criar novo pedido
router.post('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { endereco_entrega, forma_pagamento_id, observacoes } = req.body;

    // Buscar carrinho do usuário
    const { data: cartItems, error: cartError } = await supabase
      .from('carrinho_usuario')
      .select(`
        *,
        produtos:produto_id (
          id,
          nome,
          preco,
          disponivel
        )
      `)
      .eq('usuario_id', userId);

    if (cartError) throw cartError;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: 'Carrinho vazio' });
    }

    // Calcular total
    const total = cartItems.reduce((acc, item) => acc + (item.subtotal || 0), 0);
    const frete = total > 100 ? 0 : 15; // Frete grátis acima de R$ 100

    // Criar pedido
    const { data: pedido, error: pedidoError } = await supabase
      .from('pedidos')
      .insert({
        usuario_id: userId,
        numero_pedido: `QM${Date.now()}`,
        status: 'pendente',
        total: total + frete,
        frete: frete,
        observacoes: observacoes || null
      })
      .select()
      .single();

    if (pedidoError) throw pedidoError;

    // Criar itens do pedido
    const itensPedido = cartItems.map(item => ({
      pedido_id: pedido.id,
      produto_id: item.produto_id,
      quantidade: item.quantidade,
      preco_unitario: item.preco_unitario
    }));

    const { error: itensError } = await supabase
      .from('itens_pedido')
      .insert(itensPedido);

    if (itensError) throw itensError;

    // Criar pagamento
    if (forma_pagamento_id) {
      await supabase
        .from('pagamentos')
        .insert({
          pedido_id: pedido.id,
          forma_pagamento_id: forma_pagamento_id,
          valor: total + frete,
          status: 'pendente'
        });
    }

    // Criar endereço de entrega
    if (endereco_entrega) {
      await supabase
        .from('enderecos_entrega')
        .insert({
          pedido_id: pedido.id,
          usuario_id: userId,
          ...endereco_entrega
        });
    }

    // Limpar carrinho
    await supabase
      .from('carrinho_usuario')
      .delete()
      .eq('usuario_id', userId);

    // Buscar pedido completo
    const { data: pedidoCompleto, error: pedidoCompletoError } = await supabase
      .from('pedidos')
      .select(`
        *,
        itens_pedido (
          *,
          produtos:produto_id (*)
        )
      `)
      .eq('id', pedido.id)
      .single();

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      data: pedidoCompleto
    });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/orders/:id - Atualizar status do pedido
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from('pedidos')
      .update({ status })
      .eq('id', id)
      .eq('usuario_id', userId)
      .select()
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }

    res.json({ data, message: 'Status atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



