<?php

namespace App\Controllers;

use App\Request;
use App\Models\Order;

class OrderController {
    private Request $request;
    private Order $orders;

    public function __construct()
    {
        $this->request = new Request();
        $this->orders = new Order();
    }

    public function create()
    {
        $user = $this->request->requireAuth();
        $payload = $this->request->getJson();
        $payload['usuario_id'] = (int)$user['id'];
        $order = $this->orders->create($payload);
        return $this->request->json(['message' => 'Pedido criado', 'pedido' => $order], 201);
    }
}


