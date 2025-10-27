<?php

namespace App\Database\Seeders;

final class EnderecoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios', ['ativo' => 1]);
        
        foreach ($usuarios as $usuario) {
            $qtd = $this->faker->numberBetween(1, 2);
            for ($i = 0; $i < $qtd; $i++) {
                $enderecoData = [
                    'usuario_id' => $usuario['id'],
                    'rua' => $this->faker->streetName(),
                    'numero' => (string)$this->faker->buildingNumber(),
                    'complemento' => null,
                    'bairro' => $this->faker->citySuffix(),
                    'cidade' => $this->faker->city(),
                    'estado' => 'SP',
                    'cep' => $this->faker->postcode(),
                    'pais' => 'Brasil',
                    'latitude' => $this->faker->latitude(-23.7, -23.4),
                    'longitude' => $this->faker->longitude(-46.8, -46.3),
                    'principal' => $i === 0 ? 1 : 0
                ];
                
                $this->db->insert('endereco_usuario', $enderecoData);
            }
        }
    }
}


