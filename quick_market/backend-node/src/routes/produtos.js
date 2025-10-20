const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/produtos - Listar todos os produtos
router.get('/', asyncHandler(async (req, res) => {
  const { mercado_id, categoria_id, busca, disponivel = true, limit = 50, offset = 0 } = req.query;

  let query = supabase
    .from('produtos')
    .select(`
      *,
      menus!inner(
        mercado_id,
        mercados:nome
      ),
      categorias_menu:categorias_menu(*),
      imagens:imagens(*)
    `)
    .eq('disponivel', disponivel === 'true');

  if (mercado_id) {
    query = query.eq('menus.mercado_id', mercado_id);
  }

  if (categoria_id) {
    query = query.eq('categoria_id', categoria_id);
  }

  if (busca) {
    query = query.ilike('nome', `%${busca}%`);
  }

  const { data: produtos, error } = await query
    .range(offset, offset + limit - 1)
    .order('nome');

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }

  res.json(produtos);
}));

// GET /api/produtos/:id - Buscar produto específico
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { data: produto, error } = await supabase
    .from('produtos')
    .select(`
      *,
      menus!inner(
        mercado_id,
        mercados:nome
      ),
      categorias_menu:categorias_menu(*),
      imagens:imagens(*)
    `)
    .eq('id', id)
    .single();

  if (error || !produto) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  res.json(produto);
}));

// GET /api/produtos/categorias - Listar categorias
router.get('/categorias', asyncHandler(async (req, res) => {
  const { mercado_id } = req.query;

  let query = supabase
    .from('categorias_menu')
    .select(`
      *,
      menus!inner(mercado_id)
    `);

  if (mercado_id) {
    query = query.eq('menus.mercado_id', mercado_id);
  }

  const { data: categorias, error } = await query.order('nome');

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar categorias' });
  }

  res.json(categorias);
}));

// GET /api/produtos/promocoes - Listar produtos em promoção
router.get('/promocoes', asyncHandler(async (req, res) => {
  const { mercado_id, limit = 20 } = req.query;

  let query = supabase
    .from('promocoes')
    .select(`
      *,
      produtos:produtos(
        *,
        menus!inner(
          mercado_id,
          mercados:nome
        ),
        imagens:imagens(*)
      )
    `)
    .eq('ativo', true)
    .gte('data_fim', new Date().toISOString().split('T')[0])
    .lte('data_inicio', new Date().toISOString().split('T')[0]);

  if (mercado_id) {
    query = query.eq('mercado_id', mercado_id);
  }

  const { data: promocoes, error } = await query
    .range(0, limit - 1)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar promoções' });
  }

  res.json(promocoes);
}));

// POST /api/produtos - Criar produto (requer autenticação - admin)
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const { menu_id, categoria_id, nome, descricao, preco, tempo_preparo, imagem_url } = req.body;

  if (!menu_id || !nome || !preco) {
    return res.status(400).json({ error: 'Menu, nome e preço são obrigatórios' });
  }

  const { data: novoProduto, error } = await supabase
    .from('produtos')
    .insert([
      {
        menu_id,
        categoria_id: categoria_id || null,
        nome,
        descricao: descricao || '',
        preco,
        tempo_preparo: tempo_preparo || null,
        disponivel: true,
        imagem_url: imagem_url || ''
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }

  res.status(201).json(novoProduto);
}));

// PUT /api/produtos/:id - Atualizar produto (requer autenticação - admin)
router.put('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, tempo_preparo, disponivel, imagem_url } = req.body;

  const updateData = {};
  if (nome) updateData.nome = nome;
  if (descricao !== undefined) updateData.descricao = descricao;
  if (preco) updateData.preco = preco;
  if (tempo_preparo !== undefined) updateData.tempo_preparo = tempo_preparo;
  if (disponivel !== undefined) updateData.disponivel = disponivel;
  if (imagem_url !== undefined) updateData.imagem_url = imagem_url;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: 'Nenhum dado para atualizar' });
  }

  const { data: produtoAtualizado, error } = await supabase
    .from('produtos')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }

  if (!produtoAtualizado) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  res.json(produtoAtualizado);
}));

// DELETE /api/produtos/:id - Deletar produto (requer autenticação - admin)
router.delete('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('produtos')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: 'Erro ao deletar produto' });
  }

  res.json({ message: 'Produto deletado com sucesso' });
}));

module.exports = router;
