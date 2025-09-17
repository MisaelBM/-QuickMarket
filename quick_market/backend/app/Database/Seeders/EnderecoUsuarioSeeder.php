<?php

namespace App\Database\Seeders;

final class EnderecoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id FROM usuarios WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO endereco_usuario (usuario_id, rua, numero, complemento, bairro, cidade, estado, cep, pais, latitude, longitude, principal) VALUES (:uid, :rua, :numero, :comp, :bairro, :cidade, :estado, :cep, :pais, :lat, :lng, :principal)');
        foreach ($usuarios as $u) {
            $qtd = $this->faker->numberBetween(1, 2);
            for ($i = 0; $i < $qtd; $i++) {
                $stmt->execute([
                    ':uid' => $u['id'],
                    ':rua' => $this->faker->streetName(),
                    ':numero' => (string)$this->faker->buildingNumber(),
                    ':comp' => null,
                    ':bairro' => $this->faker->citySuffix(),
                    ':cidade' => $this->faker->city(),
                    ':estado' => 'SP',
                    ':cep' => $this->faker->postcode(),
                    ':pais' => 'Brasil',
                    ':lat' => $this->faker->latitude(-23.7, -23.4),
                    ':lng' => $this->faker->longitude(-46.8, -46.3),
                    ':principal' => $i === 0 ? 1 : 0,
                ]);
            }
        }
    }
}


