const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/pagamentos - Listar pagamentos do usuário
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;

  const { data: pagamentos, error } = await supabase
    .from('pagamentos')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        total,
        usuarios:nome
      ),
      formas_pagamento:nome
    `)
    .eq('pedidos.usuario_id', usuarioId)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar pagamentos' });
  }

  res.json(pagamentos);
}));

// GET /api/pagamentos/:id - Buscar pagamento específico
router.get('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.user.id;

  const { data: pagamento, error } = await supabase
    .from('pagamentos')
    .select(`
      *,
      pedidos:pedidos(
        numero_pedido,
        total,
        usuarios:nome
      ),
      formas_pagamento:nome
    `)
    .eq('id', id)
    .eq('pedidos.usuario_id', usuarioId)
    .single();

  if (error || !pagamento) {
    return res.status(404).json({ error: 'Pagamento não encontrado' });
  }

  res.json(pagamento);
}));

// POST /api/pagamentos - Processar pagamento
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
  const usuarioId = req.user.id;
  const { pedido_id, forma_pagamento_id, dados_pagamento } = req.body;

  if (!pedido_id || !forma_pagamento_id) {
    return res.status(400).json({ 
      error: 'ID do pedido e forma de pagamento são obrigatórios' 
    });
  }

  // Buscar pedido
  const { data: pedido, error: pedidoError } = await supabase
    .from('pedidos')
    .select('*')
    .eq('id', pedido_id)
    .eq('usuario_id', usuarioId)
    .single();

  if (pedidoError || !pedido) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }

  if (pedido.status !== 'pendente') {
    return res.status(400).json({ error: 'Pedido já foi processado' });
  }

  // Verificar se já existe pagamento para este pedido
  const { data: pagamentoExistente } = await supabase
    .from('pagamentos')
    .select('id')
    .eq('pedido_id', pedido_id)
    .single();

  if (pagamentoExistente) {
    return res.status(400).json({ error: 'Pagamento já existe para este pedido' });
  }

  // Simular processamento de pagamento
  const statusPagamento = await processarPagamento(forma_pagamento_id, pedido.total, dados_pagamento);

  // Criar registro de pagamento
  const { data: novoPagamento, error: pagamentoError } = await supabase
    .from('pagamentos')
    .insert([
      {
        pedido_id,
        forma_pagamento_id,
        valor: pedido.total,
        status: statusPagamento.status,
        transacao_id: statusPagamento.transacao_id
      }
    ])
    .select()
    .single();

  if (pagamentoError) {
    return res.status(500).json({ error: 'Erro ao processar pagamento' });
  }

  // Atualizar status do pedido
  const novoStatus = statusPagamento.status === 'pago' ? 'confirmado' : 'pendente';
  
  await supabase
    .from('pedidos')
    .update({ status: novoStatus })
    .eq('id', pedido_id);

  res.status(201).json({
    message: 'Pagamento processado',
    pagamento: novoPagamento,
    status: statusPagamento.status
  });
}));

// Função para simular processamento de pagamento
async function processarPagamento(formaPagamentoId, valor, dadosPagamento) {
  // Simular delay de processamento
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simular diferentes cenários baseados na forma de pagamento
  const cenarios = ['pago', 'pago', 'pago', 'falhou']; // 75% de aprovação
  const status = cenarios[Math.floor(Math.random() * cenarios.length)];

  return {
    status,
    transacao_id: `TXN${Date.now()}${Math.random().toString(36).substr(2, 9)}`
  };
}

// POST /api/pagamentos/pix/qrcode - Gerar QR Code para PIX
router.post('/pix/qrcode', authenticateToken, asyncHandler(async (req, res) => {
  const { valor, descricao } = req.body;

  if (!valor) {
    return res.status(400).json({ error: 'Valor é obrigatório' });
  }

  // Simular geração de QR Code PIX
  const qrCodeData = {
    chave: 'quickmarket@exemplo.com',
    valor: parseFloat(valor),
    descricao: descricao || 'Pagamento QuickMarket',
    qr_code: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`, // QR Code fake
    codigo_copia_cola: `00020126580014br.gov.bcb.pix0136${Date.now()}520400005303986540${valor}5802BR5913QuickMarket6009Sao Paulo62070503***6304${Math.random().toString(36).substr(2, 4).toUpperCase()}`
  };

  res.json(qrCodeData);
}));

// GET /api/pagamentos/formas - Listar formas de pagamento disponíveis
router.get('/formas', asyncHandler(async (req, res) => {
  const { data: formasPagamento, error } = await supabase
    .from('formas_pagamento')
    .select('*')
    .eq('ativo', true)
    .order('nome');

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar formas de pagamento' });
  }

  res.json(formasPagamento);
}));

module.exports = router;
