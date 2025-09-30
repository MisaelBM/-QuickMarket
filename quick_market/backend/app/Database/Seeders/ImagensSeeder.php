<?php

namespace App\Database\Seeders;

final class ImagensSeeder extends Seeder
{
    public function run(): void
    {
        $mercados = $this->getAll('mercados');
        $produtos = $this->getAll('produtos');
        $promocoes = $this->getAll('promocoes');

        // Imagens dos mercados
        foreach ($mercados as $mercado) {
            $imagemData = [
                'entidade_id' => $mercado['id'],
                'tipo_entidade' => 'mercado',
                'url' => $this->faker->imageUrl(800, 600, 'business', true, 'mercado'),
                'legenda' => $this->faker->optional()->sentence(5),
                'ordem' => 0
            ];
            $this->db->insert('imagens', $imagemData);
        }

        // Imagens dos produtos
        foreach ($produtos as $produto) {
            $imagemData = [
                'entidade_id' => $produto['id'],
                'tipo_entidade' => 'produto',
                'url' => $this->faker->imageUrl(640, 480, 'food', true, 'produto'),
                'legenda' => $this->faker->optional()->sentence(5),
                'ordem' => 0
            ];
            $this->db->insert('imagens', $imagemData);
        }

        // Imagens das promoções
        foreach ($promocoes as $promocao) {
            $imagemData = [
                'entidade_id' => $promocao['id'],
                'tipo_entidade' => 'promocao',
                'url' => $this->faker->imageUrl(640, 480, 'abstract', true, 'promo'),
                'legenda' => $this->faker->optional()->sentence(5),
                'ordem' => 0
            ];
            $this->db->insert('imagens', $imagemData);
        }
    }
}


