const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const { authenticateToken } = require('../middleware/auth');

// GET /api/cart - Obter carrinho do usuário
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from('carrinho_usuario')
      .select(`
        *,
        produtos:produto_id (
          id,
          nome,
          descricao,
          preco,
          imagem_url,
          disponivel
        )
      `)
      .eq('usuario_id', userId);

    if (error) throw error;

    // Mapear dados para o formato esperado pelo frontend
    const formattedData = data.map(item => ({
      id: item.id,
      produto_id: item.produto_id,
      nome: item.produtos.nome,
      descricao: item.produtos.descricao,
      preco: item.preco_unitario,
      quantidade: item.quantidade,
      subtotal: item.subtotal,
      imagem: item.produtos.imagem_url
    }));

    res.json(formattedData);
  } catch (error) {
    console.error('Erro ao buscar carrinho:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/cart - Adicionar item ao carrinho
router.post('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { produto_id, quantidade, observacoes } = req.body;

    if (!produto_id) {
      return res.status(400).json({ error: 'produto_id é obrigatório' });
    }

    // Verificar se o produto existe e está disponível
    const { data: produto, error: produtoError } = await supabase
      .from('produtos')
      .select('*')
      .eq('id', produto_id)
      .eq('disponivel', true)
      .single();

    if (produtoError || !produto) {
      return res.status(404).json({ error: 'Produto não encontrado ou indisponível' });
    }

    // Verificar se já existe no carrinho
    const { data: existingItem } = await supabase
      .from('carrinho_usuario')
      .select('*')
      .eq('usuario_id', userId)
      .eq('produto_id', produto_id)
      .single();

    let result;

    if (existingItem) {
      // Atualizar quantidade
      const newQuantity = (existingItem.quantidade || 1) + (quantidade || 1);
      const { data, error } = await supabase
        .from('carrinho_usuario')
        .update({ quantidade: newQuantity })
        .eq('id', existingItem.id)
        .select()
        .single();

      if (error) throw error;
      result = data;
    } else {
      // Criar novo item
      const { data, error } = await supabase
        .from('carrinho_usuario')
        .insert({
          usuario_id: userId,
          produto_id: produto_id,
          quantidade: quantidade || 1,
          preco_unitario: produto.preco,
          observacoes: observacoes || null
        })
        .select()
        .single();

      if (error) throw error;
      result = data;
    }

    res.json(result);
  } catch (error) {
    console.error('Erro ao adicionar ao carrinho:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/cart/:id - Atualizar item do carrinho
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { quantidade, observacoes } = req.body;

    const updateData = {};
    if (quantidade !== undefined) updateData.quantidade = quantidade;
    if (observacoes !== undefined) updateData.observacoes = observacoes;

    const { data, error } = await supabase
      .from('carrinho_usuario')
      .update(updateData)
      .eq('id', id)
      .eq('usuario_id', userId)
      .select()
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro ao atualizar carrinho:', error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/cart/:id - Remover item do carrinho
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const { error } = await supabase
      .from('carrinho_usuario')
      .delete()
      .eq('id', id)
      .eq('usuario_id', userId);

    if (error) throw error;

    res.json({ message: 'Item removido com sucesso' });
  } catch (error) {
    console.error('Erro ao remover do carrinho:', error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/cart - Limpar carrinho
router.delete('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { error } = await supabase
      .from('carrinho_usuario')
      .delete()
      .eq('usuario_id', userId);

    if (error) throw error;

    res.json({ message: 'Carrinho limpo com sucesso' });
  } catch (error) {
    console.error('Erro ao limpar carrinho:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


