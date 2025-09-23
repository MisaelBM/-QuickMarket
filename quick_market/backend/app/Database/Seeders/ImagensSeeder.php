<?php

namespace App\Database\Seeders;

final class ImagensSeeder extends Seeder
{
    public function run(): void
    {
    $mercados = $this->db->query('SELECT id FROM mercados')->fetchAll();
    $produtos = $this->db->query('SELECT id FROM produtos')->fetchAll();
        $promocoes = $this->db->query('SELECT id FROM promocoes')->fetchAll();

        $stmt = $this->db->prepare('INSERT INTO imagens (entidade_id, tipo_entidade, url, legenda, ordem) VALUES (:id, :tipo, :url, :legenda, :ordem)');

        foreach ($mercados as $m) {
            $stmt->execute([
                ':id' => $m['id'],
                ':tipo' => 'mercado',
                ':url' => $this->faker->imageUrl(800, 600, 'business', true, 'mercado'),
                ':legenda' => $this->faker->optional()->sentence(5),
                ':ordem' => 0,
            ]);
        }

        foreach ($produtos as $p) {
            $stmt->execute([
                ':id' => $p['id'],
                ':tipo' => 'produto',
                ':url' => $this->faker->imageUrl(640, 480, 'food', true, 'produto'),
                ':legenda' => $this->faker->optional()->sentence(5),
                ':ordem' => 0,
            ]);
        }

        foreach ($promocoes as $pr) {
            $stmt->execute([
                ':id' => $pr['id'],
                ':tipo' => 'promocao',
                ':url' => $this->faker->imageUrl(640, 480, 'abstract', true, 'promo'),
                ':legenda' => $this->faker->optional()->sentence(5),
                ':ordem' => 0,
            ]);
        }
    }
}


