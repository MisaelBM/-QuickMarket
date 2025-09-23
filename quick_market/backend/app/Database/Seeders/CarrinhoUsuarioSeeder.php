<?php

namespace App\Database\Seeders;

final class CarrinhoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id FROM usuarios WHERE ativo = 1')->fetchAll();
        $produtos = $this->db->query('SELECT id, preco FROM produtos')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO carrinho_usuario (usuario_id, produto_id, quantidade, observacoes, preco_unitario) VALUES (:uid, :produto, :qtd, :obs, :preco)');
        foreach ($usuarios as $u) {
            $itens = $this->faker->numberBetween(0, 3);
            for ($i = 0; $i < $itens; $i++) {
                $produto = $this->faker->randomElement($produtos);
                $qtd = $this->faker->numberBetween(1, 3);
                $stmt->execute([
                    ':uid' => $u['id'],
                    ':produto' => $produto['id'],
                    ':qtd' => $qtd,
                    ':obs' => $this->faker->optional()->sentence(5),
                    ':preco' => $produto['preco'],
                ]);
            }
        }
    }
}


