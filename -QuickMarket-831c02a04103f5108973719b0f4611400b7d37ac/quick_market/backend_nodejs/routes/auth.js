const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const supabase = require('../config/supabase');

// POST /api/auth/register - Registrar novo usuário
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha, data_nascimento } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
    }

    // Verificar se email já existe
    const { data: existingUser } = await supabase
      .from('usuarios')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const senha_hash = await bcrypt.hash(senha, salt);

    // Criar usuário
    const { data, error } = await supabase
      .from('usuarios')
      .insert({
        nome,
        email,
        senha_hash,
        data_nascimento: data_nascimento || null,
        tipo: 'cliente',
        ativo: true
      })
      .select()
      .single();

    if (error) throw error;

    // Gerar token JWT
    const token = jwt.sign(
      { id: data.id, email: data.email, tipo: data.tipo },
      process.env.JWT_SECRET || 'quickmarket_secret',
      { expiresIn: '30d' }
    );

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      token,
      user: {
        id: data.id,
        nome: data.nome,
        email: data.email,
        tipo: data.tipo
      }
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/auth/login - Login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    // Buscar usuário
    const { data: user, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Verificar senha
    const senhaValida = await bcrypt.compare(senha, user.senha_hash);

    if (!senhaValida) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    if (!user.ativo) {
      return res.status(403).json({ error: 'Conta desativada' });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, tipo: user.tipo },
      process.env.JWT_SECRET || 'quickmarket_secret',
      { expiresIn: '30d' }
    );

    res.json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        tipo: user.tipo
      }
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/auth/verify - Verificar token
router.post('/verify', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'quickmarket_secret', (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido' });
      }

      res.json({ valid: true, user: decoded });
    });
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



