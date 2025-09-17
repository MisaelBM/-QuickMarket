<?php

namespace App\Database\Seeders;

final class EnderecosEntregaSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->db->query('SELECT id, usuario_id FROM pedidos')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO enderecos_entrega (pedido_id, usuario_id, rua, numero, complemento, bairro, cidade, estado, cep, latitude, longitude) VALUES (:pid, :uid, :rua, :numero, :comp, :bairro, :cidade, :estado, :cep, :lat, :lng)');
        foreach ($pedidos as $p) {
            $stmt->execute([
                ':pid' => $p['id'],
                ':uid' => $p['usuario_id'],
                ':rua' => $this->faker->streetName(),
                ':numero' => (string)$this->faker->buildingNumber(),
                ':comp' => null,
                ':bairro' => $this->faker->citySuffix(),
                ':cidade' => $this->faker->city(),
                ':estado' => 'SP',
                ':cep' => $this->faker->postcode(),
                ':lat' => $this->faker->latitude(-23.7, -23.4),
                ':lng' => $this->faker->longitude(-46.8, -46.3),
            ]);
        }
    }
}


