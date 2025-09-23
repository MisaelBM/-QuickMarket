<?php

namespace App\Database\Seeders;

final class PedidosSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query("SELECT id FROM usuarios WHERE tipo = 'cliente' AND ativo = 1")->fetchAll();
    $mercados = $this->db->query('SELECT id, taxa_entrega FROM mercados')->fetchAll();
    $stmt = $this->db->prepare("INSERT INTO pedidos (usuario_id, mercado_id, numero_pedido, status, total, frete, desconto_aplicado, observacoes) VALUES (:uid, :mid, :num, :status, :total, :frete, :desc, :obs)");

        for ($i = 0; $i < 30; $i++) {
            $user = $this->faker->randomElement($usuarios);
            $mercado = $this->faker->randomElement($mercados);
            $frete = (float)$mercado['taxa_entrega'];
            $subtotal = $this->faker->randomFloat(2, 30, 200);
            $desconto = $this->faker->optional(0.3)->randomFloat(2, 5, 30) ?? 0;
            $total = max(0, $subtotal + $frete - $desconto);
            $stmt->execute([
                ':uid' => $user['id'],
                ':mid' => $mercado['id'],
                ':num' => strtoupper($this->faker->bothify('PED-########')),
                ':status' => $this->faker->randomElement(['pendente','confirmado','preparo','enviado','entregue','cancelado']),
                ':total' => $total,
                ':frete' => $frete,
                ':desc' => $desconto,
                ':obs' => $this->faker->optional()->sentence(8),
            ]);
        }
    }
}


