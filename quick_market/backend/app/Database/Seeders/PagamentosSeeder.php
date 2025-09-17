<?php

namespace App\Database\Seeders;

final class PagamentosSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->db->query('SELECT id, total FROM pedidos')->fetchAll();
        $formas = $this->db->query('SELECT id FROM formas_pagamento WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO pagamentos (pedido_id, forma_pagamento_id, valor, status, transacao_id) VALUES (:pid, :fid, :valor, :status, :tx)');
        foreach ($pedidos as $p) {
            $forma = $this->faker->randomElement($formas);
            $status = $this->faker->randomElement(['pago','pendente','falhou','reembolsado']);
            $stmt->execute([
                ':pid' => $p['id'],
                ':fid' => $forma['id'],
                ':valor' => $p['total'],
                ':status' => $status,
                ':tx' => strtoupper($this->faker->bothify('TX-########')),
            ]);
        }
    }
}


