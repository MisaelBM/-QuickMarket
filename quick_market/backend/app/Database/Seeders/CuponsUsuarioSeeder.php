<?php

namespace App\Database\Seeders;

final class CuponsUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id FROM usuarios WHERE ativo = 1')->fetchAll();
        $cupons = $this->db->query('SELECT id FROM cupons WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare('INSERT IGNORE INTO cupons_usuario (usuario_id, cupom_id, usos_restantes) VALUES (:uid, :cid, :usos)');
        foreach ($usuarios as $u) {
            $associar = $this->faker->randomElements($cupons, $this->faker->numberBetween(1, min(3, count($cupons))));
            foreach ($associar as $c) {
                $stmt->execute([
                    ':uid' => $u['id'],
                    ':cid' => $c['id'],
                    ':usos' => $this->faker->numberBetween(1, 5),
                ]);
            }
        }
    }
}


