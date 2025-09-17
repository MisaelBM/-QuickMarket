<?php

namespace App\Database\Seeders;

final class CarrinhoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id FROM usuarios WHERE ativo = 1')->fetchAll();
        $pratos = $this->db->query('SELECT id, preco FROM pratos')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO carrinho_usuario (usuario_id, prato_id, quantidade, observacoes, preco_unitario) VALUES (:uid, :prato, :qtd, :obs, :preco)');
        foreach ($usuarios as $u) {
            $itens = $this->faker->numberBetween(0, 3);
            for ($i = 0; $i < $itens; $i++) {
                $prato = $this->faker->randomElement($pratos);
                $qtd = $this->faker->numberBetween(1, 3);
                $stmt->execute([
                    ':uid' => $u['id'],
                    ':prato' => $prato['id'],
                    ':qtd' => $qtd,
                    ':obs' => $this->faker->optional()->sentence(5),
                    ':preco' => $prato['preco'],
                ]);
            }
        }
    }
}


