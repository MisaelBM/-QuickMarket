<?php

namespace App\Database\Seeders;

final class FormasPagamentoMercadoSeeder extends Seeder
{
    public function run(): void
    {
        $mercados = $this->db->query('SELECT id FROM mercados')->fetchAll();
        $formas = $this->db->query('SELECT id FROM formas_pagamento WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare('INSERT IGNORE INTO formas_pagamento_mercado (mercado_id, forma_pagamento_id) VALUES (:mid, :fid)');

        foreach ($mercados as $m) {
            $aceitas = $this->faker->randomElements($formas, $this->faker->numberBetween(2, count($formas)));
            foreach ($aceitas as $f) {
                $stmt->execute([':mid' => $m['id'], ':fid' => $f['id']]);
            }
        }
    }
}


