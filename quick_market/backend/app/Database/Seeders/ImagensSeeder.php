<?php

namespace App\Database\Seeders;

final class ImagensSeeder extends Seeder
{
    public function run(): void
    {
        $restaurantes = $this->db->query('SELECT id FROM restaurantes')->fetchAll();
        $pratos = $this->db->query('SELECT id FROM pratos')->fetchAll();
        $promocoes = $this->db->query('SELECT id FROM promocoes')->fetchAll();

        $stmt = $this->db->prepare('INSERT INTO imagens (entidade_id, tipo_entidade, url, legenda, ordem) VALUES (:id, :tipo, :url, :legenda, :ordem)');

        foreach ($restaurantes as $r) {
            $stmt->execute([
                ':id' => $r['id'],
                ':tipo' => 'restaurante',
                ':url' => $this->faker->imageUrl(800, 600, 'business', true, 'restaurante'),
                ':legenda' => $this->faker->optional()->sentence(5),
                ':ordem' => 0,
            ]);
        }

        foreach ($pratos as $p) {
            $stmt->execute([
                ':id' => $p['id'],
                ':tipo' => 'prato',
                ':url' => $this->faker->imageUrl(640, 480, 'food', true, 'prato'),
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




