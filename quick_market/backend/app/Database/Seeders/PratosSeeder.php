<?php

namespace App\Database\Seeders;

final class PratosSeeder extends Seeder
{
    public function run(): void
    {
        $stmt = $this->db->prepare('INSERT INTO pratos (menu_id, categoria_id, nome, descricao, preco, tempo_preparo, disponivel, imagem_url) VALUES (:menu_id, :categoria_id, :nome, :descricao, :preco, :tempo, 1, :img)');
        $menus = $this->db->query('SELECT id FROM menus')->fetchAll();
        $categorias = $this->db->query('SELECT id FROM categorias_menu')->fetchAll();
        foreach ($menus as $m) {
            $qtd = $this->faker->numberBetween(5, 10);
            for ($i = 0; $i < $qtd; $i++) {
                $categoriaId = $this->faker->optional()->randomElement($categorias)['id'] ?? null;
                $stmt->execute([
                    ':menu_id' => $m['id'],
                    ':categoria_id' => $categoriaId,
                    ':nome' => ucfirst($this->faker->words(2, true)),
                    ':descricao' => $this->faker->sentence(8),
                    ':preco' => $this->faker->randomFloat(2, 10, 80),
                    ':tempo' => $this->faker->numberBetween(10, 45),
                    ':img' => $this->faker->imageUrl(640, 480, 'food', true, 'prato'),
                ]);
            }
        }
    }
}


