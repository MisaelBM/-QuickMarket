<?php

namespace App\Database\Seeders;

final class MenusSeeder extends Seeder
{
    public function run(): void
    {
        $mercados = $this->getAll('mercados');
        
        foreach ($mercados as $mercado) {
            $menusPorMercado = $this->faker->numberBetween(1, 2);
            for ($i = 0; $i < $menusPorMercado; $i++) {
                $menuData = [
                    'mercado_id' => $mercado['id'],
                    'nome' => $this->faker->randomElement(['Principal', 'Almoço', 'Jantar', 'Lanches']),
                    'descricao' => $this->faker->sentence(6),
                    'ativo' => 1
                ];
                
                $this->db->insert('menus', $menuData);
            }
        }
    }
}


