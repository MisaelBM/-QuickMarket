<?php

namespace App\Controllers;

use App\Request;
use App\Models\Order;

class PaymentController {
    private Request $request;
    private Order $orders;

    public function __construct()
    {
        $this->request = new Request();
        $this->orders = new Order();
    }

    // Execução do pagamento (stub)
    public function execute()
    {
        $payload = $this->request->getJson();
        $orderId = (int)($payload['pedido_id'] ?? 0);
        $formaPagamentoId = (int)($payload['forma_pagamento_id'] ?? 0);
        $valor = (float)($payload['valor'] ?? 0);

        // Stub: Não chama gateway, apenas armazena a transação como pendente/feito
        $tx = $this->orders->addPayment([
            'pedido_id' => $orderId,
            'forma_pagamento_id' => $formaPagamentoId,
            'valor' => $valor,
            'status' => $payload['status'] ?? 'pendente',
            'transacao_id' => $payload['transacao_id'] ?? null,
        ]);

        return $this->request->json(['message' => 'Pagamento processado (stub)', 'transacao' => $tx]);
    }
}


