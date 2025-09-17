<?php

namespace App\Database\Seeders;

final class CuponsSeeder extends Seeder
{
    public function run(): void
    {
        $stmt = $this->db->prepare('INSERT INTO cupons (codigo, desconto_percentual, desconto_valor, data_inicio, data_fim, limite_uso_total, minimo_pedido, ativo) VALUES (:codigo, :percentual, :valor, :inicio, :fim, :limite, :minimo, 1) ON DUPLICATE KEY UPDATE desconto_percentual = VALUES(desconto_percentual), desconto_valor = VALUES(desconto_valor), data_fim = VALUES(data_fim), ativo = 1');

        for ($i = 0; $i < 10; $i++) {
            $percentual = $this->faker->optional(0.6)->randomFloat(2, 5, 30);
            $valor = $percentual ? null : $this->faker->randomFloat(2, 5, 25);
            $inicio = date('Y-m-d', strtotime('-15 days'));
            $fim = date('Y-m-d', strtotime('+30 days'));
            $stmt->execute([
                ':codigo' => strtoupper($this->faker->unique()->bothify('QMK-###??')),
                ':percentual' => $percentual,
                ':valor' => $valor,
                ':inicio' => $inicio,
                ':fim' => $fim,
                ':limite' => $this->faker->numberBetween(50, 500),
                ':minimo' => $this->faker->randomFloat(2, 30, 120),
            ]);
        }
    }
}


