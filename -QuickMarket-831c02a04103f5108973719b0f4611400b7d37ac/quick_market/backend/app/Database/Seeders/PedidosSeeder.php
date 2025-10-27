<?php

namespace App\Database\Seeders;

final class PedidosSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios', ['tipo' => 'cliente', 'ativo' => 1]);
        $mercados = $this->getAll('mercados');

        for ($i = 0; $i < 30; $i++) {
            $user = $this->faker->randomElement($usuarios);
            $mercado = $this->faker->randomElement($mercados);
            $frete = (float)$mercado['taxa_entrega'];
            $subtotal = $this->faker->randomFloat(2, 30, 200);
            $desconto = $this->faker->optional(0.3)->randomFloat(2, 5, 30) ?? 0;
            $total = max(0, $subtotal + $frete - $desconto);
            
            $pedidoData = [
                'usuario_id' => $user['id'],
                'mercado_id' => $mercado['id'],
                'numero_pedido' => strtoupper($this->faker->bothify('PED-########')),
                'status' => $this->faker->randomElement(['pendente','confirmado','preparo','enviado','entregue','cancelado']),
                'total' => $total,
                'frete' => $frete,
                'desconto_aplicado' => $desconto,
                'observacoes' => $this->faker->optional()->sentence(8)
            ];
            
            $this->db->insert('pedidos', $pedidoData);
        }
    }
}


