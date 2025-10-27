<?php

namespace App\Database\Seeders;

final class CuponsSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            $percentual = $this->faker->optional(0.6)->randomFloat(2, 5, 30);
            $valor = $percentual ? null : $this->faker->randomFloat(2, 5, 25);
            $inicio = date('Y-m-d', strtotime('-15 days'));
            $fim = date('Y-m-d', strtotime('+30 days'));
            
            $cupomData = [
                'codigo' => strtoupper($this->faker->unique()->bothify('QMK-###??')),
                'desconto_percentual' => $percentual,
                'desconto_valor' => $valor,
                'data_inicio' => $inicio,
                'data_fim' => $fim,
                'limite_uso_total' => $this->faker->numberBetween(50, 500),
                'minimo_pedido' => $this->faker->randomFloat(2, 30, 120),
                'ativo' => 1
            ];
            
            $this->insertOrUpdate('cupons', $cupomData, ['desconto_percentual', 'desconto_valor', 'data_fim', 'ativo']);
        }
    }
}


