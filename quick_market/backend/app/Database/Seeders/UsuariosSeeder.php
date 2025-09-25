<?php

namespace App\Database\Seeders;

final class UsuariosSeeder extends Seeder
{
    public function run(): void
    {
        $passwordHash = password_hash('senha123', PASSWORD_BCRYPT);

        // Admin
        $stmt = $this->db->prepare('INSERT INTO usuarios (nome, email, senha_hash, tipo, data_nascimento, ativo) VALUES (:nome, :email, :senha_hash, :tipo, :data_nascimento, 1) ON DUPLICATE KEY UPDATE nome = VALUES(nome), senha_hash = VALUES(senha_hash), tipo = VALUES(tipo)');
        $stmt->execute([
            ':nome' => 'Administrador',
            ':email' => 'admin@quickmarket.test',
            ':senha_hash' => $passwordHash,
            ':tipo' => 'admin',
            ':data_nascimento' => '1990-01-01',
        ]);

        // Clientes
        $stmt = $this->db->prepare('INSERT INTO usuarios (nome, email, senha_hash, tipo, data_nascimento, ativo) VALUES (:nome, :email, :senha_hash, :tipo, :data_nascimento, 1)');
        for ($i = 0; $i < 20; $i++) {
            $stmt->execute([
                ':nome' => $this->faker->name(),
                ':email' => $this->faker->unique()->safeEmail(),
                ':senha_hash' => $passwordHash,
                ':tipo' => 'cliente',
                ':data_nascimento' => $this->faker->date('Y-m-d', '-18 years'),
            ]);
        }
    }
}




