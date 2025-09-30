<?php

namespace App\Database\Seeders;

final class PagamentosSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->getAll('pedidos');
        $formas = $this->getAll('formas_pagamento', ['ativo' => 1]);
        
        foreach ($pedidos as $pedido) {
            $forma = $this->faker->randomElement($formas);
            $status = $this->faker->randomElement(['pago','pendente','falhou','reembolsado']);
            
            $pagamentoData = [
                'pedido_id' => $pedido['id'],
                'forma_pagamento_id' => $forma['id'],
                'valor' => $pedido['total'],
                'status' => $status,
                'transacao_id' => strtoupper($this->faker->bothify('TX-########'))
            ];
            
            $this->db->insert('pagamentos', $pagamentoData);
        }
    }
}


