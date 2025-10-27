const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/categories - Listar todas as categorias (menus)
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('menus')
      .select('*')
      .eq('ativo', true)
      .order('nome');

    if (error) throw error;

    res.json({ data: data || [] });
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/categories/:id - Obter categoria específica
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('menus')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/categories/:id/products - Produtos de uma categoria
router.get('/:id/products', async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .eq('menu_id', id)
      .eq('disponivel', true)
      .order('nome')
      .range(from, to);

    if (error) throw error;

    res.json({ data: data || [] });
  } catch (error) {
    console.error('Erro ao buscar produtos da categoria:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



