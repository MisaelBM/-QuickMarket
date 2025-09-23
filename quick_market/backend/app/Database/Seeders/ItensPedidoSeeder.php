<?php

namespace App\Database\Seeders;

final class ItensPedidoSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->db->query('SELECT id FROM pedidos')->fetchAll();
        $produtos = $this->db->query('SELECT id, preco FROM produtos')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario, customizacoes) VALUES (:pid, :produto, :qtd, :preco, :custom)');
        foreach ($pedidos as $p) {
            $qtdItens = $this->faker->numberBetween(1, 4);
            for ($i = 0; $i < $qtdItens; $i++) {
                $produto = $this->faker->randomElement($produtos);
                $qtd = $this->faker->numberBetween(1, 3);
                $stmt->execute([
                    ':pid' => $p['id'],
                    ':produto' => $produto['id'],
                    ':qtd' => $qtd,
                    ':preco' => $produto['preco'],
                    ':custom' => json_encode(['observacoes' => $this->faker->optional()->sentence(5)]),
                ]);
            }
        }
    }
}


