const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/entregas - Listar entregas do usuário
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: entregas, error } = await supabase
    .from('entregas')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        total,
        usuarios:nome
      )
    `)
    .eq('pedidos.usuario_id', usuarioId)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar entregas' });
  }

  res.json(entregas);
}));

// GET /api/entregas/:id - Buscar entrega específica
router.get('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  const { data: entrega, error } = await supabase
    .from('entregas')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        total,
        usuarios:nome
      )
    `)
    .eq('id', id)
    .eq('pedidos.usuario_id', usuarioId)
    .single();

  if (error || !entrega) {
    return res.status(404).json({ error: 'Entrega não encontrada' });
  }

  res.json(entrega);
}));

// PUT /api/entregas/:id/status - Atualizar status da entrega
router.put('/:id/status', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, latitude_atual, longitude_atual } = req.body;
  const usuarioId = req.user.id;

  const statusValidos = ['agendado', 'coletado', 'em_rota', 'entregue', 'problema'];
  
  if (!statusValidos.includes(status)) {
    return res.status(400).json({ error: 'Status inválido' });
  }

  // Verificar se a entrega pertence ao usuário
  const { data: entrega } = await supabase
    .from('entregas')
    .select(`
      id,
      pedidos!inner(usuario_id)
    `)
    .eq('id', id)
    .eq('pedidos.usuario_id', usuarioId)
    .single();

  if (!entrega) {
    return res.status(404).json({ error: 'Entrega não encontrada' });
  }

  const updateData = { status };
  if (latitude_atual !== undefined) updateData.latitude_atual = latitude_atual;
  if (longitude_atual !== undefined) updateData.longitude_atual = longitude_atual;

  const { data: entregaAtualizada, error } = await supabase
    .from('entregas')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar status da entrega' });
  }

  res.json({
    message: 'Status da entrega atualizado',
    entrega: entregaAtualizada
  });
}));

// GET /api/entregas/status/:status - Buscar entregas por status
router.get('/status/:status', authenticateToken, asyncHandler(async (req, res) => {
  const { status } = req.params;
  const usuarioId = req.user.id;

  const { data: entregas, error } = await supabase
    .from('entregas')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        total,
        usuarios:nome
      )
    `)
    .eq('pedidos.usuario_id', usuarioId)
    .eq('status', status)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar entregas' });
  }

  res.json(entregas);
}));

// POST /api/entregas/:id/rastreamento - Atualizar localização da entrega
router.post('/:id/rastreamento', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { latitude, longitude } = req.body;
  const usuarioId = req.user.id;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude e longitude são obrigatórias' });
  }

  // Verificar se a entrega pertence ao usuário
  const { data: entrega } = await supabase
    .from('entregas')
    .select(`
      id,
      pedidos!inner(usuario_id)
    `)
    .eq('id', id)
    .eq('pedidos.usuario_id', usuarioId)
    .single();

  if (!entrega) {
    return res.status(404).json({ error: 'Entrega não encontrada' });
  }

  const { data: entregaAtualizada, error } = await supabase
    .from('entregas')
    .update({ 
      latitude_atual: latitude,
      longitude_atual: longitude
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar localização' });
  }

  res.json({
    message: 'Localização atualizada',
    entrega: entregaAtualizada
  });
}));

module.exports = router;
