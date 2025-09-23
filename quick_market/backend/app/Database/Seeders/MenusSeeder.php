<?php

namespace App\Database\Seeders;

final class MenusSeeder extends Seeder
{
    public function run(): void
    {
        $stmt = $this->db->prepare('INSERT INTO menus (mercado_id, nome, descricao, ativo) VALUES (:mid, :nome, :descricao, 1)');
        $mercados = $this->db->query('SELECT id FROM mercados')->fetchAll();
        foreach ($mercados as $m) {
            $menusPorMercado = $this->faker->numberBetween(1, 2);
            for ($i = 0; $i < $menusPorMercado; $i++) {
                $stmt->execute([
                    ':mid' => $m['id'],
                    ':nome' => $this->faker->randomElement(['Principal', 'Almoço', 'Jantar', 'Lanches']),
                    ':descricao' => $this->faker->sentence(6),
                ]);
            }
        }
    }
}


