<?php

namespace App\Database\Seeders;

final class MenusSeeder extends Seeder
{
    public function run(): void
    {
        $stmt = $this->db->prepare('INSERT INTO menus (restaurante_id, nome, descricao, ativo) VALUES (:rid, :nome, :descricao, 1)');
        $restaurantes = $this->db->query('SELECT id FROM restaurantes')->fetchAll();
        foreach ($restaurantes as $r) {
            $menusPorRestaurante = $this->faker->numberBetween(1, 2);
            for ($i = 0; $i < $menusPorRestaurante; $i++) {
                $stmt->execute([
                    ':rid' => $r['id'],
                    ':nome' => $this->faker->randomElement(['Principal', 'Almoço', 'Jantar', 'Lanches']),
                    ':descricao' => $this->faker->sentence(6),
                ]);
            }
        }
    }
}


