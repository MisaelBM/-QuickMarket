<?php

namespace App\Database\Seeders;

final class FormasPagamentoRestauranteSeeder extends Seeder
{
    public function run(): void
    {
        $restaurantes = $this->db->query('SELECT id FROM restaurantes')->fetchAll();
        $formas = $this->db->query('SELECT id FROM formas_pagamento WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare('INSERT IGNORE INTO formas_pagamento_restaurante (restaurante_id, forma_pagamento_id) VALUES (:rid, :fid)');

        foreach ($restaurantes as $r) {
            $aceitas = $this->faker->randomElements($formas, $this->faker->numberBetween(2, count($formas)));
            foreach ($aceitas as $f) {
                $stmt->execute([':rid' => $r['id'], ':fid' => $f['id']]);
            }
        }
    }
}




