const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const mercadoRoutes = require('./routes/mercados');
const produtoRoutes = require('./routes/produtos');
const carrinhoRoutes = require('./routes/carrinho');
const pedidoRoutes = require('./routes/pedidos');
const pagamentoRoutes = require('./routes/pagamentos');
const usuarioRoutes = require('./routes/usuarios');
const notificacaoRoutes = require('./routes/notificacoes');
const cupomRoutes = require('./routes/cupons');
const avaliacaoRoutes = require('./routes/avaliacoes');
const entregaRoutes = require('./routes/entregas');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de segurança
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite de 100 requests por IP por janela de tempo
  message: 'Muitas requisições deste IP, tente novamente mais tarde.'
});
app.use(limiter);

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Middleware para parsing de JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/mercados', mercadoRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/carrinho', carrinhoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pagamentos', pagamentoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/notificacoes', notificacaoRoutes);
app.use('/api/cupons', cupomRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);
app.use('/api/entregas', entregaRoutes);

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).json({ 
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo deu errado'
  });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📱 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});
