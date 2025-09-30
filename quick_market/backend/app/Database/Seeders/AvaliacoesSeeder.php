<?php

namespace App\Database\Seeders;

final class AvaliacoesSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->getAll('pedidos', ['status' => 'entregue']);
        
        foreach ($pedidos as $pedido) {
            if ($this->faker->boolean(60)) {
                $avaliacaoData = [
                    'pedido_id' => $pedido['id'],
                    'mercado_id' => $pedido['mercado_id'],
                    'nota_estrelas' => $this->faker->numberBetween(3, 5),
                    'comentario' => $this->faker->optional()->sentence(10),
                    'nota_entrega' => $this->faker->numberBetween(3, 5)
                ];
                
                $this->db->insert('avaliacoes', $avaliacaoData);
            }
        }
    }
}


