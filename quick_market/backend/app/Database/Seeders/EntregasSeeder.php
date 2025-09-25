<?php

namespace App\Database\Seeders;

final class EntregasSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->db->query('SELECT id FROM pedidos')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO entregas (pedido_id, status, tempo_estimado, latitude_atual, longitude_atual, entregador_id) VALUES (:pid, :status, :tempo, :lat, :lng, :entregador)');
        foreach ($pedidos as $p) {
            $stmt->execute([
                ':pid' => $p['id'],
                ':status' => $this->faker->randomElement(['agendado','coletado','em_rota','entregue','problema']),
                ':tempo' => $this->faker->numberBetween(10, 60),
                ':lat' => $this->faker->latitude(-23.7, -23.4),
                ':lng' => $this->faker->longitude(-46.8, -46.3),
                ':entregador' => null,
            ]);
        }
    }
}




