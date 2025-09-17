<?php

namespace App\Database\Seeders;

final class PromocoesSeeder extends Seeder
{
    public function run(): void
    {
        $stmt = $this->db->prepare('INSERT INTO promocoes (restaurante_id, prato_id, nome, descricao, desconto_percentual, desconto_valor, data_inicio, data_fim, limite_uso, ativo) VALUES (:rid, :pid, :nome, :descricao, :percentual, :valor, :inicio, :fim, :limite, 1)');
        $restaurantes = $this->db->query('SELECT id FROM restaurantes')->fetchAll();
        $pratos = $this->db->query('SELECT id, menu_id FROM pratos')->fetchAll();
        for ($i = 0; $i < 20; $i++) {
            $rid = $this->faker->optional()->randomElement($restaurantes)['id'] ?? null;
            $pid = $this->faker->optional()->randomElement($pratos)['id'] ?? null;
            $inicio = date('Y-m-d', strtotime('-10 days'));
            $fim = date('Y-m-d', strtotime('+20 days'));
            $stmt->execute([
                ':rid' => $rid,
                ':pid' => $pid,
                ':nome' => 'Promo ' . strtoupper($this->faker->bothify('P##')), 
                ':descricao' => $this->faker->sentence(8),
                ':percentual' => $this->faker->optional(0.6)->randomFloat(2, 5, 30),
                ':valor' => $this->faker->optional(0.4)->randomFloat(2, 5, 20),
                ':inicio' => $inicio,
                ':fim' => $fim,
                ':limite' => $this->faker->numberBetween(10, 200),
            ]);
        }
    }
}


