<?php

namespace App\Database\Seeders;

final class AvaliacoesSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->db->query("SELECT id, mercado_id FROM pedidos WHERE status = 'entregue'")->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO avaliacoes (pedido_id, mercado_id, nota_estrelas, comentario, nota_entrega) VALUES (:pid, :mid, :nota, :comentario, :nota_entrega)');
        foreach ($pedidos as $p) {
            if ($this->faker->boolean(60)) {
                $stmt->execute([
                    ':pid' => $p['id'],
                    ':mid' => $p['mercado_id'],
                    ':nota' => $this->faker->numberBetween(3, 5),
                    ':comentario' => $this->faker->optional()->sentence(10),
                    ':nota_entrega' => $this->faker->numberBetween(3, 5),
                ]);
            }
        }
    }
}


