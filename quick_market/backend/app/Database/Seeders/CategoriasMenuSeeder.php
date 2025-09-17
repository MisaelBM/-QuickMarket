<?php

namespace App\Database\Seeders;

final class CategoriasMenuSeeder extends Seeder
{
    public function run(): void
    {
        // Globais (menu_id NULL)
        $stmt = $this->db->prepare('INSERT INTO categorias_menu (menu_id, nome, descricao, ordem) VALUES (NULL, :nome, :descricao, :ordem)');
        $globais = ['Bebidas', 'Sobremesas', 'Vegetariano'];
        $ordem = 0;
        foreach ($globais as $nome) {
            $stmt->execute([':nome' => $nome, ':descricao' => null, ':ordem' => $ordem++]);
        }

        // Por menu
        $stmtMenu = $this->db->prepare('INSERT INTO categorias_menu (menu_id, nome, descricao, ordem) VALUES (:menu_id, :nome, :descricao, :ordem)');
        $menus = $this->db->query('SELECT id FROM menus')->fetchAll();
        foreach ($menus as $m) {
            $qtd = $this->faker->numberBetween(2, 4);
            for ($i = 0; $i < $qtd; $i++) {
                $stmtMenu->execute([
                    ':menu_id' => $m['id'],
                    ':nome' => $this->faker->randomElement(['Entradas', 'Pratos Principais', 'Combos', 'Promoções']),
                    ':descricao' => $this->faker->optional()->sentence(5),
                    ':ordem' => $i,
                ]);
            }
        }
    }
}


