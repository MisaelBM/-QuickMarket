<?php

namespace App\Database\Seeders;

final class UsuariosSeeder extends Seeder
{
    public function run(): void
    {
        $passwordHash = password_hash('senha123', PASSWORD_BCRYPT);

        // Admin
        $adminData = [
            'nome' => 'Administrador',
            'email' => 'admin@quickmarket.test',
            'senha_hash' => $passwordHash,
            'tipo' => 'admin',
            'data_nascimento' => '1990-01-01',
            'ativo' => 1
        ];
        
        $this->insertOrUpdate('usuarios', $adminData, ['nome', 'senha_hash', 'tipo']);

        // Clientes
        for ($i = 0; $i < 20; $i++) {
            $clientData = [
                'nome' => $this->faker->name(),
                'email' => $this->faker->unique()->safeEmail(),
                'senha_hash' => $passwordHash,
                'tipo' => 'cliente',
                'data_nascimento' => $this->faker->date('Y-m-d', '-18 years'),
                'ativo' => 1
            ];
            
            $this->db->insert('usuarios', $clientData);
        }
    }
}


