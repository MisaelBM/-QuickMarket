<?php

namespace App\Database\Seeders;

final class FormasPagamentoMercadoSeeder extends Seeder
{
    public function run(): void
    {
        $mercados = $this->getAll('mercados');
        $formas = $this->getAll('formas_pagamento', ['ativo' => 1]);

        foreach ($mercados as $mercado) {
            $aceitas = $this->faker->randomElements($formas, $this->faker->numberBetween(2, count($formas)));
            foreach ($aceitas as $forma) {
                $relacaoData = [
                    'mercado_id' => $mercado['id'],
                    'forma_pagamento_id' => $forma['id']
                ];
                
                try {
                    $this->db->insert('formas_pagamento_mercado', $relacaoData);
                } catch (\Exception $e) {
                    // Ignore duplicate key errors (INSERT IGNORE equivalent)
                    if (strpos($e->getMessage(), 'duplicate') === false && strpos($e->getMessage(), 'unique') === false) {
                        throw $e;
                    }
                }
            }
        }
    }
}


