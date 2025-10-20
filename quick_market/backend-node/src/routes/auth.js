const express = require('express');
const { body } = require('express-validator');
const supabase = require('../config/supabase');
const { 
  generateToken, 
  hashPassword, 
  verifyPassword, 
  validateRequest, 
  asyncHandler 
} = require('../middleware/auth');

const router = express.Router();

// Validação para login
const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Email inválido'),
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres')
];

// Validação para cadastro
const registerValidation = [
  body('nome').trim().isLength({ min: 2 }).withMessage('Nome deve ter pelo menos 2 caracteres'),
  body('email').isEmail().normalizeEmail().withMessage('Email inválido'),
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
  body('confirmarSenha').custom((value, { req }) => {
    if (value !== req.body.senha) {
      throw new Error('Senhas não coincidem');
    }
    return true;
  })
];

// POST /api/auth/login
router.post('/login', loginValidation, validateRequest(loginValidation), asyncHandler(async (req, res) => {
  const { email, senha } = req.body;

  // Buscar usuário no Supabase
  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !usuario) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  // Verificar senha
  const senhaValida = await verifyPassword(senha, usuario.senha_hash);
  if (!senhaValida) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  // Gerar token
  const token = generateToken({
    id: usuario.id,
    email: usuario.email,
    nome: usuario.nome,
    tipo: usuario.tipo
  });

  // Criar sessão
  const { error: sessaoError } = await supabase
    .from('sessao_usuario')
    .insert([
      {
        usuario_id: usuario.id,
        token: token,
        expiracao: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 dias
        dispositivo: req.headers['user-agent'] || 'unknown',
        ip_address: req.ip || req.connection.remoteAddress
      }
    ]);

  if (sessaoError) {
    console.error('Erro ao criar sessão:', sessaoError);
  }

  // Remover senha da resposta
  const { senha_hash: _, ...usuarioSemSenha } = usuario;

  res.json({
    message: 'Login realizado com sucesso',
    token,
    usuario: usuarioSemSenha
  });
}));

// POST /api/auth/register
router.post('/register', registerValidation, validateRequest(registerValidation), asyncHandler(async (req, res) => {
  const { nome, email, senha, data_nascimento } = req.body;

  // Verificar se usuário já existe
  const { data: usuarioExistente } = await supabase
    .from('usuarios')
    .select('id')
    .eq('email', email)
    .single();

  if (usuarioExistente) {
    return res.status(400).json({ error: 'Usuário já existe com este email' });
  }

  // Hash da senha
  const senhaHash = await hashPassword(senha);

  // Criar usuário
  const { data: novoUsuario, error } = await supabase
    .from('usuarios')
    .insert([
      {
        nome,
        email,
        senha_hash: senhaHash,
        data_nascimento: data_nascimento || null,
        tipo: 'cliente',
        ativo: true
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }

  // Gerar token
  const token = generateToken({
    id: novoUsuario.id,
    email: novoUsuario.email,
    nome: novoUsuario.nome,
    tipo: novoUsuario.tipo
  });

  // Remover senha da resposta
  const { senha_hash: _, ...usuarioSemSenha } = novoUsuario;

  res.status(201).json({
    message: 'Usuário criado com sucesso',
    token,
    usuario: usuarioSemSenha
  });
}));

// POST /api/auth/logout
router.post('/logout', asyncHandler(async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    // Invalidar sessão no banco
    await supabase
      .from('sessao_usuario')
      .update({ expiracao: new Date().toISOString() })
      .eq('token', token);
  }

  res.json({ message: 'Logout realizado com sucesso' });
}));

// GET /api/auth/me
router.get('/me', asyncHandler(async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de acesso necessário' });
  }

  try {
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const { data: usuario, error } = await supabase
      .from('usuarios')
      .select('id, nome, email, tipo, data_nascimento, ativo, created_at')
      .eq('id', decoded.id)
      .single();

    if (error || !usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json({ usuario });
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' });
  }
}));

module.exports = router;
