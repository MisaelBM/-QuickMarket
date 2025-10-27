<?php

namespace App\Database\Seeders;

final class EntregasSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->getAll('pedidos');
        
        foreach ($pedidos as $pedido) {
            $entregaData = [
                'pedido_id' => $pedido['id'],
                'status' => $this->faker->randomElement(['agendado','coletado','em_rota','entregue','problema']),
                'tempo_estimado' => $this->faker->numberBetween(10, 60),
                'latitude_atual' => $this->faker->latitude(-23.7, -23.4),
                'longitude_atual' => $this->faker->longitude(-46.8, -46.3),
                'entregador_id' => null
            ];
            
            $this->db->insert('entregas', $entregaData);
        }
    }
}


