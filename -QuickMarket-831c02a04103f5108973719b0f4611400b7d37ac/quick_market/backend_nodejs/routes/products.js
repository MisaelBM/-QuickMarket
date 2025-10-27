const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const { optionalAuth } = require('../middleware/auth');

// GET /api/products - Listar todos os produtos
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { search, category, page = 1, limit = 20 } = req.query;

    let query = supabase
      .from('produtos')
      .select(`
        *,
        menus:menu_id (
          id,
          nome,
          descricao
        )
      `)
      .eq('disponivel', true);

    // Filtrar por categoria
    if (category) {
      query = query.eq('menu_id', category);
    }

    // Busca por texto
    if (search) {
      query = query.or(`nome.ilike.%${search}%,descricao.ilike.%${search}%`);
    }

    // Paginação
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) throw error;

    res.json({
      data: data || [],
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: count
      }
    });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/products/:id - Obter produto específico
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('produtos')
      .select(`
        *,
        menus:menu_id (
          id,
          nome,
          descricao
        )
      `)
      .eq('id', id)
      .eq('disponivel', true)
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/products/category/:categoryId - Produtos por categoria
router.get('/category/:categoryId', optionalAuth, async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .eq('menu_id', categoryId)
      .eq('disponivel', true)
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) throw error;

    res.json({ data: data || [] });
  } catch (error) {
    console.error('Erro ao buscar produtos por categoria:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/products/featured - Produtos em destaque (exemplo)
router.get('/featured/list', optionalAuth, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .eq('disponivel', true)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;

    res.json({ data: data || [] });
  } catch (error) {
    console.error('Erro ao buscar produtos em destaque:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



