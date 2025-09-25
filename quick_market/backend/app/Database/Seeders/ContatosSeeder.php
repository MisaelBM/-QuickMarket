<?php

namespace App\Database\Seeders;

final class ContatosSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id, email FROM usuarios')->fetchAll();
        $restaurantes = $this->db->query('SELECT id FROM restaurantes')->fetchAll();
        $representantes = $this->db->query('SELECT id FROM representantes_legais')->fetchAll();

        $stmt = $this->db->prepare('INSERT INTO contatos (entidade_id, tipo_entidade, tipo_contato, valor, principal) VALUES (:id, :tipo, :tipo_contato, :valor, :principal)');

        foreach ($usuarios as $u) {
            $stmt->execute([':id' => $u['id'], ':tipo' => 'usuario', ':tipo_contato' => 'email', ':valor' => $u['email'], ':principal' => 1]);
            $stmt->execute([':id' => $u['id'], ':tipo' => 'usuario', ':tipo_contato' => 'telefone', ':valor' => $this->faker->phoneNumber(), ':principal' => 0]);
        }

        foreach ($restaurantes as $r) {
            $stmt->execute([':id' => $r['id'], ':tipo' => 'restaurante', ':tipo_contato' => 'email', ':valor' => $this->faker->companyEmail(), ':principal' => 1]);
        }

        foreach ($representantes as $rep) {
            $stmt->execute([':id' => $rep['id'], ':tipo' => 'representante', ':tipo_contato' => 'telefone', ':valor' => $this->faker->cellphoneNumber(), ':principal' => 1]);
        }
    }
}




