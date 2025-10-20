const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/notificacoes - Listar notificações do usuário
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { limit = 20, offset = 0 } = req.query;

  const { data: notificacoes, error } = await supabase
    .from('notificacoes')
    .select('*')
    .eq('usuario_id', usuarioId)
    .order('data_envio', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar notificações' });
  }

  res.json(notificacoes);
}));

// GET /api/notificacoes/unread - Contar notificações não lidas
router.get('/unread', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { count, error } = await supabase
    .from('notificacoes')
    .select('*', { count: 'exact', head: true })
    .eq('usuario_id', usuarioId)
    .eq('lida', false);

  if (error) {
    return res.status(500).json({ error: 'Erro ao contar notificações' });
  }

  res.json({ count: count || 0 });
}));

// PUT /api/notificacoes/:id/read - Marcar notificação como lida
router.put('/:id/read', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  const { data: notificacao, error } = await supabase
    .from('notificacoes')
    .update({ lida: true })
    .eq('id', id)
    .eq('usuario_id', usuarioId)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao marcar notificação como lida' });
  }

  if (!notificacao) {
    return res.status(404).json({ error: 'Notificação não encontrada' });
  }

  res.json({ message: 'Notificação marcada como lida' });
}));

// PUT /api/notificacoes/read-all - Marcar todas as notificações como lidas
router.put('/read-all', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { error } = await supabase
    .from('notificacoes')
    .update({ lida: true })
    .eq('usuario_id', usuarioId)
    .eq('lida', false);

  if (error) {
    return res.status(500).json({ error: 'Erro ao marcar notificações como lidas' });
  }

  res.json({ message: 'Todas as notificações foram marcadas como lidas' });
}));

// DELETE /api/notificacoes/:id - Deletar notificação
router.delete('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  const { error } = await supabase
    .from('notificacoes')
    .delete()
    .eq('id', id)
    .eq('usuario_id', usuarioId);

  if (error) {
    return res.status(500).json({ error: 'Erro ao deletar notificação' });
  }

  res.json({ message: 'Notificação deletada com sucesso' });
}));

// DELETE /api/notificacoes - Deletar todas as notificações
router.delete('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { error } = await supabase
    .from('notificacoes')
    .delete()
    .eq('usuario_id', usuarioId);

  if (error) {
    return res.status(500).json({ error: 'Erro ao deletar notificações' });
  }

  res.json({ message: 'Todas as notificações foram deletadas' });
}));

// POST /api/notificacoes - Criar notificação (para uso interno/admin)
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const { usuario_id, titulo, mensagem, tipo } = req.body;

  if (!usuario_id || !titulo || !mensagem) {
    return res.status(400).json({ 
      error: 'ID do usuário, título e mensagem são obrigatórios' 
    });
  }

  const { data: novaNotificacao, error } = await supabase
    .from('notificacoes')
    .insert([
      {
        usuario_id,
        titulo,
        mensagem,
        tipo: tipo || 'aviso',
        lida: false
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao criar notificação' });
  }

  res.status(201).json({
    message: 'Notificação criada com sucesso',
    notificacao: novaNotificacao
  });
}));

module.exports = router;
