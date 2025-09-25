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
        (new RestaurantesSeeder())->run();
        (new ContatosSeeder())->run();
        (new MenusSeeder())->run();
        (new CategoriasMenuSeeder())->run();
        (new PratosSeeder())->run();
        (new FormasPagamentoRestauranteSeeder())->run();
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
            'promocoes','pratos','categorias_menu','menus','formas_pagamento_restaurante','formas_pagamento',
            'endereco_restaurante','representantes_legais','restaurantes',
            'notificacoes','cupons_usuario','cupons',
            'sessao_usuario','carrinho_usuario','endereco_usuario','contatos','usuarios','imagens'
        ];

        $this->db->exec('SET FOREIGN_KEY_CHECKS=0');
        foreach ($tables as $table) {
            $this->db->exec("TRUNCATE TABLE `$table`");
        }
        $this->db->exec('SET FOREIGN_KEY_CHECKS=1');
    }
}


