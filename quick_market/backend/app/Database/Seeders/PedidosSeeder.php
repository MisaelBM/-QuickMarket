<?php

namespace App\Database\Seeders;

final class PedidosSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query("SELECT id FROM usuarios WHERE tipo = 'cliente' AND ativo = 1")->fetchAll();
        $restaurantes = $this->db->query('SELECT id, taxa_entrega FROM restaurantes')->fetchAll();
        $stmt = $this->db->prepare("INSERT INTO pedidos (usuario_id, restaurante_id, numero_pedido, status, total, frete, desconto_aplicado, observacoes) VALUES (:uid, :rid, :num, :status, :total, :frete, :desc, :obs)");

        for ($i = 0; $i < 30; $i++) {
            $user = $this->faker->randomElement($usuarios);
            $rest = $this->faker->randomElement($restaurantes);
            $frete = (float)$rest['taxa_entrega'];
            $subtotal = $this->faker->randomFloat(2, 30, 200);
            $desconto = $this->faker->optional(0.3)->randomFloat(2, 5, 30) ?? 0;
            $total = max(0, $subtotal + $frete - $desconto);
            $stmt->execute([
                ':uid' => $user['id'],
                ':rid' => $rest['id'],
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


