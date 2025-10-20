const express = require('express');
const supabase = require('../config/supabase');
const { authenticateToken, asyncHandler } = require('../middleware/auth');

const router = express.Router();

// GET /api/mercados - Listar todos os mercados
router.get('/', asyncHandler(async (req, res) => {
  const { status = 'aberto', ativo = true } = req.query;

  const { data: mercados, error } = await supabase
    .from('mercados')
    .select(`
      *,
      endereco_mercado:endereco_mercado(*),
      contatos:contatos(*),
      imagens:imagens(*)
    `)
    .eq('status', status)
    .eq('ativo', ativo === 'true')
    .order('nome');

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar mercados' });
  }

  res.json(mercados);
}));

// GET /api/mercados/produtos - Listar mercados com produtos
router.get('/produtos', asyncHandler(async (req, res) => {
  const { data: mercados, error } = await supabase
    .from('mercados')
    .select(`
      *,
      endereco_mercado:endereco_mercado(*),
      menus:menus(
        *,
        produtos:produtos(count)
      )
    `)
    .eq('ativo', true)
    .eq('status', 'aberto')
    .order('nome');

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar mercados' });
  }

  // Transformar dados para o formato esperado pelo frontend
  const mercadosFormatados = mercados.map(mercado => {
    const endereco = mercado.endereco_mercado?.[0];
    const totalProdutos = mercado.menus?.reduce((acc, menu) => acc + (menu.produtos?.[0]?.count || 0), 0) || 0;
    
    return {
      id: mercado.id,
      nome: mercado.nome,
      endereco: endereco ? `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}` : '',
      avaliacao: 4.0, // Será calculado baseado nas avaliações
      ofertas: totalProdutos,
      imagem: mercado.imagens?.[0]?.url || '/imgSupermercados/extra.png',
      tempo_medio_preparo: mercado.tempo_medio_preparo,
      taxa_entrega: mercado.taxa_entrega
    };
  });

  res.json(mercadosFormatados);
}));

// GET /api/mercados/:id - Buscar mercado específico
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { data: mercado, error } = await supabase
    .from('mercados')
    .select(`
      *,
      endereco_mercado:endereco_mercado(*),
      contatos:contatos(*),
      imagens:imagens(*),
      menus:menus(
        *,
        categorias_menu:categorias_menu(*)
      )
    `)
    .eq('id', id)
    .single();

  if (error || !mercado) {
    return res.status(404).json({ error: 'Mercado não encontrado' });
  }

  res.json(mercado);
}));

// GET /api/mercados/:id/produtos - Buscar produtos de um mercado
router.get('/:id/produtos', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { categoria, busca, disponivel = true } = req.query;

  let query = supabase
    .from('produtos')
    .select(`
      *,
      menus!inner(mercado_id),
      categorias_menu:categorias_menu(*),
      imagens:imagens(*)
    `)
    .eq('menus.mercado_id', id)
    .eq('disponivel', disponivel === 'true');

  if (categoria) {
    query = query.eq('categoria_id', categoria);
  }

  if (busca) {
    query = query.ilike('nome', `%${busca}%`);
  }

  const { data: produtos, error } = await query.order('nome');

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }

  res.json(produtos);
}));

// GET /api/mercados/:id/avaliacoes - Buscar avaliações de um mercado
router.get('/:id/avaliacoes', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { data: avaliacoes, error } = await supabase
    .from('avaliacoes')
    .select(`
      *,
      pedidos:pedidos(
        usuarios:nome
      )
    `)
    .eq('mercado_id', id)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }

  res.json(avaliacoes);
}));

// POST /api/mercados/:id/avaliacoes - Criar avaliação (requer autenticação)
router.post('/:id/avaliacoes', authenticateToken, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { pedido_id, nota_estrelas, comentario, nota_entrega } = req.body;
  const usuarioId = req.user.id;

  if (!nota_estrelas || nota_estrelas < 1 || nota_estrelas > 5) {
    return res.status(400).json({ error: 'Nota deve ser entre 1 e 5' });
  }

  // Verificar se usuário já avaliou este mercado para este pedido
  const { data: avaliacaoExistente } = await supabase
    .from('avaliacoes')
    .select('id')
    .eq('mercado_id', id)
    .eq('pedido_id', pedido_id)
    .single();

  if (avaliacaoExistente) {
    return res.status(400).json({ error: 'Você já avaliou este mercado para este pedido' });
  }

  const { data: novaAvaliacao, error } = await supabase
    .from('avaliacoes')
    .insert([
      {
        pedido_id,
        mercado_id: id,
        nota_estrelas,
        comentario: comentario || '',
        nota_entrega: nota_entrega || null
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Erro ao criar avaliação' });
  }

  res.status(201).json(novaAvaliacao);
}));

module.exports = router;
