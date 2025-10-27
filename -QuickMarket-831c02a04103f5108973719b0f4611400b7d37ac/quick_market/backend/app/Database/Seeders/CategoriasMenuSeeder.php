<?php

namespace App\Database\Seeders;

final class CategoriasMenuSeeder extends Seeder
{
    public function run(): void
    {
        // Globais (menu_id NULL)
        $globais = ['Bebidas', 'Sobremesas', 'Vegetariano'];
        $ordem = 0;
        foreach ($globais as $nome) {
            $categoriaData = [
                'menu_id' => null,
                'nome' => $nome,
                'descricao' => null,
                'ordem' => $ordem++
            ];
            
            $this->db->insert('categorias_menu', $categoriaData);
        }

        // Por menu
        $menus = $this->getAll('menus');
        foreach ($menus as $menu) {
            $qtd = $this->faker->numberBetween(2, 4);
            for ($i = 0; $i < $qtd; $i++) {
                $categoriaData = [
                    'menu_id' => $menu['id'],
                    'nome' => $this->faker->randomElement(['Entradas', 'Produtos Principais', 'Combos', 'Promoções']),
                    'descricao' => $this->faker->optional()->sentence(5),
                    'ordem' => $i
                ];
                
                $this->db->insert('categorias_menu', $categoriaData);
            }
        }
    }
}


