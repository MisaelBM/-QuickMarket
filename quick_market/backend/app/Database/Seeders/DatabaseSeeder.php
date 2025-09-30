<?php

namespace App\Database\Seeders;

final class DatabaseSeeder extends Seeder
{
    public function run(bool $fresh = false): void
    {
        if ($fresh) {
            $this->truncateAll();
        }

        // Order matters due to FKs
        (new FormasPagamentoSeeder())->run();
        (new UsuariosSeeder())->run();
        (new EnderecoUsuarioSeeder())->run();
    (new MercadosSeeder())->run();
        (new ContatosSeeder())->run();
        (new MenusSeeder())->run();
        (new CategoriasMenuSeeder())->run();
    (new ProdutosSeeder())->run();
    (new FormasPagamentoMercadoSeeder())->run();
        (new CuponsSeeder())->run();
        (new CuponsUsuarioSeeder())->run();
        (new ImagensSeeder())->run();
        (new PromocoesSeeder())->run();
        (new PedidosSeeder())->run();
        (new ItensPedidoSeeder())->run();
        (new EnderecosEntregaSeeder())->run();
        (new PagamentosSeeder())->run();
        (new EntregasSeeder())->run();
        (new AvaliacoesSeeder())->run();
        (new NotificacoesSeeder())->run();
        (new CarrinhoUsuarioSeeder())->run();
        (new SessaoUsuarioSeeder())->run();
    }

    private function truncateAll(): void
    {
        $tables = [
            'avaliacoes','entregas','pagamentos','enderecos_entrega','itens_pedido','pedidos',
            'promocoes','produtos','categorias_menu','menus','formas_pagamento_mercado','formas_pagamento',
            'endereco_mercado','representantes_legais','mercados',
            'notificacoes','cupons_usuario','cupons',
            'sessao_usuario','carrinho_usuario','endereco_usuario','contatos','usuarios','imagens'
        ];

        // For Supabase, we'll delete all records from each table
        // Note: Supabase doesn't support TRUNCATE with foreign key constraints like MySQL
        foreach ($tables as $table) {
            try {
                // Delete all records from the table
                $this->db->delete($table, []);
            } catch (\Exception $e) {
                // If table doesn't exist or has constraints, continue
                echo "Warning: Could not truncate table $table: " . $e->getMessage() . "\n";
            }
        }
    }
}


