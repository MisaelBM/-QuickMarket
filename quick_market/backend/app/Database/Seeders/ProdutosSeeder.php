<?php

namespace App\Database\Seeders;

final class ProdutosSeeder extends Seeder
{
    public function run(): void
    {
        $menus = $this->getAll('menus');
        $categorias = $this->getAll('categorias_menu');
        
        foreach ($menus as $menu) {
            $qtd = $this->faker->numberBetween(5, 10);
            for ($i = 0; $i < $qtd; $i++) {
                $categoriaId = $this->faker->optional()->randomElement($categorias)['id'] ?? null;
                
                $produtoData = [
                    'menu_id' => $menu['id'],
                    'categoria_id' => $categoriaId,
                    'nome' => ucfirst($this->faker->words(2, true)),
                    'descricao' => $this->faker->sentence(8),
                    'preco' => $this->faker->randomFloat(2, 10, 80),
                    'tempo_preparo' => $this->faker->numberBetween(10, 45),
                    'disponivel' => 1,
                    'imagem_url' => $this->faker->imageUrl(640, 480, 'food', true, 'produto')
                ];
                
                $this->db->insert('produtos', $produtoData);
            }
        }
    }
}


