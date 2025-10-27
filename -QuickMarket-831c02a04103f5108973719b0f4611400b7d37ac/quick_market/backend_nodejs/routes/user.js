const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const { authenticateToken } = require('../middleware/auth');

// GET /api/user - Obter dados do usuário
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from('usuarios')
      .select('id, nome, email, tipo, data_nascimento, created_at')
      .eq('id', userId)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/user - Atualizar dados do usuário
router.put('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { nome, data_nascimento } = req.body;

    const updateData = {};
    if (nome) updateData.nome = nome;
    if (data_nascimento) updateData.data_nascimento = data_nascimento;

    const { data, error } = await supabase
      .from('usuarios')
      .update(updateData)
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;

    res.json({ data, message: 'Dados atualizados com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/user/addresses - Obter endereços do usuário
router.get('/addresses', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from('endereco_usuario')
      .select('*')
      .eq('usuario_id', userId)
      .order('principal', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ data: data || [] });
  } catch (error) {
    console.error('Erro ao buscar endereços:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/user/addresses - Adicionar endereço
router.post('/addresses', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const addressData = req.body;

    // Se for principal, marcar outros como não principais
    if (addressData.principal) {
      await supabase
        .from('endereco_usuario')
        .update({ principal: false })
        .eq('usuario_id', userId);
    }

    const { data, error } = await supabase
      .from('endereco_usuario')
      .insert({
        usuario_id: userId,
        ...addressData
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ data, message: 'Endereço adicionado com sucesso' });
  } catch (error) {
    console.error('Erro ao adicionar endereço:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/user/addresses/:id - Atualizar endereço
router.put('/addresses/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const addressData = req.body;

    const { data, error } = await supabase
      .from('endereco_usuario')
      .update(addressData)
      .eq('id', id)
      .eq('usuario_id', userId)
      .select()
      .single();

    if (error) throw error;

    res.json({ data, message: 'Endereço atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar endereço:', error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/user/addresses/:id - Remover endereço
router.delete('/addresses/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const { error } = await supabase
      .from('endereco_usuario')
      .delete()
      .eq('id', id)
      .eq('usuario_id', userId);

    if (error) throw error;

    res.json({ message: 'Endereço removido com sucesso' });
  } catch (error) {
    console.error('Erro ao remover endereço:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



