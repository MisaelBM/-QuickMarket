const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/usuarios/profile - Buscar perfil do usuário
router.get('/profile', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('id, nome, email, tipo, data_nascimento, ativo, created_at')
    .eq('id', usuarioId)
    .single();

  if (error || !usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  res.json(usuario);
}));

// PUT /api/usuarios/profile - Atualizar perfil do usuário
router.put('/profile', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { nome, data_nascimento } = req.body;

  const updateData = {};
  if (nome) updateData.nome = nome;
  if (data_nascimento) updateData.data_nascimento = data_nascimento;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: 'Nenhum dado para atualizar' });
  }

  const { data: usuarioAtualizado, error } = await supabase
    .from('usuarios')
    .update(updateData)
    .eq('id', usuarioId)
    .select('id, nome, email, tipo, data_nascimento, ativo, created_at')
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar perfil' });
  }

  res.json({
    message: 'Perfil atualizado com sucesso',
    usuario: usuarioAtualizado
  });
}));

// PUT /api/usuarios/password - Alterar senha
router.put('/password', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { senha_atual, nova_senha } = req.body;

  if (!senha_atual || !nova_senha) {
    return res.status(400).json({ error: 'Senha atual e nova senha são obrigatórias' });
  }

  if (nova_senha.length < 6) {
    return res.status(400).json({ error: 'Nova senha deve ter pelo menos 6 caracteres' });
  }

  // Buscar usuário atual
  const { data: usuario, error: usuarioError } = await supabase
    .from('usuarios')
    .select('senha_hash')
    .eq('id', usuarioId)
    .single();

  if (usuarioError || !usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  // Verificar senha atual
  const { verifyPassword } = require('../middleware/auth');
  const senhaValida = await verifyPassword(senha_atual, usuario.senha_hash);
  
  if (!senhaValida) {
    return res.status(400).json({ error: 'Senha atual incorreta' });
  }

  // Hash da nova senha
  const { hashPassword } = require('../middleware/auth');
  const novaSenhaHash = await hashPassword(nova_senha);

  // Atualizar senha
  const { error: updateError } = await supabase
    .from('usuarios')
    .update({ senha_hash: novaSenhaHash })
    .eq('id', usuarioId);

  if (updateError) {
    return res.status(500).json({ error: 'Erro ao atualizar senha' });
  }

  res.json({ message: 'Senha alterada com sucesso' });
}));

// GET /api/usuarios/enderecos - Listar endereços do usuário
router.get('/enderecos', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: enderecos, error } = await supabase
    .from('endereco_usuario')
    .select('*')
    .eq('usuario_id', usuarioId)
    .order('principal', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar endereços' });
  }

  res.json(enderecos);
}));

// POST /api/usuarios/enderecos - Adicionar endereço
router.post('/enderecos', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { rua, numero, complemento, bairro, cidade, estado, cep, pais, latitude, longitude, principal } = req.body;

  if (!rua || !numero || !bairro || !cidade || !estado || !cep) {
    return res.status(400).json({ 
      error: 'Rua, número, bairro, cidade, estado e CEP são obrigatórios' 
    });
  }

  // Se este endereço for marcado como principal, desmarcar outros
  if (principal) {
    await supabase
      .from('endereco_usuario')
      .update({ principal: false })
      .eq('usuario_id', usuarioId);
  }

  const { data: novoEndereco, error } = await supabase
    .from('endereco_usuario')
    .insert([
      {
        usuario_id: usuarioId,
        rua,
        numero,
        complemento: complemento || '',
        bairro,
        cidade,
        estado,
        cep,
        pais: pais || 'Brasil',
        latitude: latitude || null,
        longitude: longitude || null,
        principal: principal || false
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao adicionar endereço' });
  }

  res.status(201).json({
    message: 'Endereço adicionado com sucesso',
    endereco: novoEndereco
  });
}));

// PUT /api/usuarios/enderecos/:id - Atualizar endereço
router.put('/enderecos/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;
  const { rua, numero, complemento, bairro, cidade, estado, cep, pais, latitude, longitude, principal } = req.body;

  const updateData = {};
  if (rua) updateData.rua = rua;
  if (numero) updateData.numero = numero;
  if (complemento !== undefined) updateData.complemento = complemento;
  if (bairro) updateData.bairro = bairro;
  if (cidade) updateData.cidade = cidade;
  if (estado) updateData.estado = estado;
  if (cep) updateData.cep = cep;
  if (pais) updateData.pais = pais;
  if (latitude !== undefined) updateData.latitude = latitude;
  if (longitude !== undefined) updateData.longitude = longitude;
  if (principal !== undefined) updateData.principal = principal;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: 'Nenhum dado para atualizar' });
  }

  // Se este endereço for marcado como principal, desmarcar outros
  if (principal) {
    await supabase
      .from('endereco_usuario')
      .update({ principal: false })
      .eq('usuario_id', usuarioId)
      .neq('id', id);
  }

  const { data: enderecoAtualizado, error } = await supabase
    .from('endereco_usuario')
    .update(updateData)
    .eq('id', id)
    .eq('usuario_id', usuarioId)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao atualizar endereço' });
  }

  if (!enderecoAtualizado) {
    return res.status(404).json({ error: 'Endereço não encontrado' });
  }

  res.json({
    message: 'Endereço atualizado com sucesso',
    endereco: enderecoAtualizado
  });
}));

// DELETE /api/usuarios/enderecos/:id - Remover endereço
router.delete('/enderecos/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  const { error } = await supabase
    .from('endereco_usuario')
    .delete()
    .eq('id', id)
    .eq('usuario_id', usuarioId);

  if (error) {
    return res.status(500).json({ error: 'Erro ao remover endereço' });
  }

  res.json({ message: 'Endereço removido com sucesso' });
}));

module.exports = router;
