<?php

namespace App\Database\Seeders;

final class PromocoesSeeder extends Seeder
{
    public function run(): void
    {
        $stmt = $this->db->prepare('INSERT INTO promocoes (mercado_id, produto_id, nome, descricao, desconto_percentual, desconto_valor, data_inicio, data_fim, limite_uso, ativo) VALUES (:mid, :pid, :nome, :descricao, :percentual, :valor, :inicio, :fim, :limite, 1)');
        $mercados = $this->db->query('SELECT id FROM mercados')->fetchAll();
        $produtos = $this->db->query('SELECT id, menu_id FROM produtos')->fetchAll();
        for ($i = 0; $i < 20; $i++) {
            $mid = $this->faker->optional()->randomElement($mercados)['id'] ?? null;
            $pid = $this->faker->optional()->randomElement($produtos)['id'] ?? null;
            $inicio = date('Y-m-d', strtotime('-10 days'));
            $fim = date('Y-m-d', strtotime('+20 days'));
            $stmt->execute([
                ':mid' => $mid,
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


