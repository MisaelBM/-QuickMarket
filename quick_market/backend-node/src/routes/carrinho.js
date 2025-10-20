const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/carrinho - Buscar carrinho do usuário
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: carrinho, error } = await supabase
    .from('carrinho_usuario')
    .select(`
      *,
      produtos:produtos(
        nome,
        preco,
        imagem_url,
        menus!inner(
          mercados:nome
        )
      )
    `)
    .eq('usuario_id', usuarioId);

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar carrinho' });
  }

  // Transformar dados para o formato esperado pelo frontend
  const carrinhoFormatado = carrinho.map(item => ({
    id: item.produto_id,
    nome: item.produtos?.nome || '',
    preco: item.preco_unitario,
    quantidade: item.quantidade,
    imagem: item.produtos?.imagem_url || '',
    mercado: item.produtos?.menus?.mercados?.nome || '',
    observacoes: item.observacoes || '',
    subtotal: item.subtotal
  }));

  res.json(carrinhoFormatado);
}));

// POST /api/carrinho - Adicionar item ao carrinho
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { produto_id, quantidade = 1, observacoes } = req.body;

  if (!produto_id) {
    return res.status(400).json({ error: 'ID do produto é obrigatório' });
  }

  // Verificar se produto existe e buscar preço atual
  const { data: produto, error: produtoError } = await supabase
    .from('produtos')
    .select('preco, disponivel')
    .eq('id', produto_id)
    .single();

  if (produtoError || !produto) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  if (!produto.disponivel) {
    return res.status(400).json({ error: 'Produto não disponível' });
  }

  // Verificar se item já existe no carrinho
  const { data: itemExistente } = await supabase
    .from('carrinho_usuario')
    .select('*')
    .eq('usuario_id', usuarioId)
    .eq('produto_id', produto_id)
    .single();

  if (itemExistente) {
    // Atualizar quantidade
    const novaQuantidade = itemExistente.quantidade + quantidade;
    const { data: itemAtualizado, error } = await supabase
      .from('carrinho_usuario')
      .update({ 
        quantidade: novaQuantidade,
        observacoes: observacoes || itemExistente.observacoes
      })
      .eq('id', itemExistente.id)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: 'Erro ao atualizar carrinho' });
    }

    return res.json({ message: 'Quantidade atualizada no carrinho' });
  }

  // Adicionar novo item
  const { data: novoItem, error } = await supabase
    .from('carrinho_usuario')
    .insert([
      {
        usuario_id: usuarioId,
        produto_id,
        quantidade,
        preco_unitario: produto.preco,
        observacoes: observacoes || ''
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao adicionar item ao carrinho' });
  }

  res.status(201).json({ message: 'Item adicionado ao carrinho' });
}));

// PUT /api/carrinho/items - Alterar quantidade de item
router.put('/items', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { id: produto_id, delta, observacoes } = req.body;

  if (!produto_id || delta === undefined) {
    return res.status(400).json({ error: 'ID do produto e delta são obrigatórios' });
  }

  // Buscar item no carrinho
  const { data: item, error: itemError } = await supabase
    .from('carrinho_usuario')
    .select('*')
    .eq('usuario_id', usuarioId)
    .eq('produto_id', produto_id)
    .single();

  if (itemError || !item) {
    return res.status(404).json({ error: 'Item não encontrado no carrinho' });
  }

  const novaQuantidade = item.quantidade + delta;

  if (novaQuantidade <= 0) {
    // Remover item se quantidade for 0 ou menor
    const { error: deleteError } = await supabase
      .from('carrinho_usuario')
      .delete()
      .eq('id', item.id);

    if (deleteError) {
      return res.status(500).json({ error: 'Erro ao remover item do carrinho' });
    }

    return res.json({ message: 'Item removido do carrinho' });
  }

  // Atualizar quantidade
  const updateData = { quantidade: novaQuantidade };
  if (observacoes !== undefined) {
    updateData.observacoes = observacoes;
  }

  const { data: itemAtualizado, error } = await supabase
    .from('carrinho_usuario')
    .update(updateData)
    .eq('id', item.id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar carrinho' });
  }

  res.json({ message: 'Carrinho atualizado' });
}));

// DELETE /api/carrinho/items/remove - Remover item do carrinho
router.delete('/items/remove', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { id: produto_id } = req.body;

  if (!produto_id) {
    return res.status(400).json({ error: 'ID do produto é obrigatório' });
  }

  const { error } = await supabase
    .from('carrinho_usuario')
    .delete()
    .eq('usuario_id', usuarioId)
    .eq('produto_id', produto_id);

  if (error) {
    return res.status(500).json({ error: 'Erro ao remover item do carrinho' });
  }

  res.json({ message: 'Item removido do carrinho' });
}));

// DELETE /api/carrinho - Limpar carrinho
router.delete('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { error } = await supabase
    .from('carrinho_usuario')
    .delete()
    .eq('usuario_id', usuarioId);

  if (error) {
    return res.status(500).json({ error: 'Erro ao limpar carrinho' });
  }

  res.json({ message: 'Carrinho limpo' });
}));

module.exports = router;
