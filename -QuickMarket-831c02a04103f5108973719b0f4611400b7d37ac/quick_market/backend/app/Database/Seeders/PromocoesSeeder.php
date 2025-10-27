<?php

namespace App\Database\Seeders;

final class PromocoesSeeder extends Seeder
{
    public function run(): void
    {
        $mercados = $this->getAll('mercados');
        $produtos = $this->getAll('produtos');
        
        for ($i = 0; $i < 20; $i++) {
            $mid = $this->faker->optional()->randomElement($mercados)['id'] ?? null;
            $pid = $this->faker->optional()->randomElement($produtos)['id'] ?? null;
            $inicio = date('Y-m-d', strtotime('-10 days'));
            $fim = date('Y-m-d', strtotime('+20 days'));
            
            $promocaoData = [
                'mercado_id' => $mid,
                'produto_id' => $pid,
                'nome' => 'Promo ' . strtoupper($this->faker->bothify('P##')),
                'descricao' => $this->faker->sentence(8),
                'desconto_percentual' => $this->faker->optional(0.6)->randomFloat(2, 5, 30),
                'desconto_valor' => $this->faker->optional(0.4)->randomFloat(2, 5, 20),
                'data_inicio' => $inicio,
                'data_fim' => $fim,
                'limite_uso' => $this->faker->numberBetween(10, 200),
                'ativo' => 1
            ];
            
            $this->db->insert('promocoes', $promocaoData);
        }
    }
}


