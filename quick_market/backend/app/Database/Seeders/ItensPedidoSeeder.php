<?php

namespace App\Database\Seeders;

final class ItensPedidoSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->db->query('SELECT id FROM pedidos')->fetchAll();
        $pratos = $this->db->query('SELECT id, preco FROM pratos')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO itens_pedido (pedido_id, prato_id, quantidade, preco_unitario, customizacoes) VALUES (:pid, :prato, :qtd, :preco, :custom)');
        foreach ($pedidos as $p) {
            $qtdItens = $this->faker->numberBetween(1, 4);
            for ($i = 0; $i < $qtdItens; $i++) {
                $prato = $this->faker->randomElement($pratos);
                $qtd = $this->faker->numberBetween(1, 3);
                $stmt->execute([
                    ':pid' => $p['id'],
                    ':prato' => $prato['id'],
                    ':qtd' => $qtd,
                    ':preco' => $prato['preco'],
                    ':custom' => json_encode(['observacoes' => $this->faker->optional()->sentence(5)]),
                ]);
            }
        }
    }
}




