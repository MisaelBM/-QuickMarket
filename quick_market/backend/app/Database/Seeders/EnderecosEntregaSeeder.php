<?php

namespace App\Database\Seeders;

final class EnderecosEntregaSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->getAll('pedidos');
        
        foreach ($pedidos as $pedido) {
            $enderecoData = [
                'pedido_id' => $pedido['id'],
                'usuario_id' => $pedido['usuario_id'],
                'rua' => $this->faker->streetName(),
                'numero' => (string)$this->faker->buildingNumber(),
                'complemento' => null,
                'bairro' => $this->faker->citySuffix(),
                'cidade' => $this->faker->city(),
                'estado' => 'SP',
                'cep' => $this->faker->postcode(),
                'latitude' => $this->faker->latitude(-23.7, -23.4),
                'longitude' => $this->faker->longitude(-46.8, -46.3)
            ];
            
            $this->db->insert('enderecos_entrega', $enderecoData);
        }
    }
}


