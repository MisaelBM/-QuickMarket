<?php

namespace App\Controllers;

use App\Request;
use App\Models\Cart;

class CartController {
    private Request $request;
    private Cart $cart;

    public function __construct()
    {
        $this->request = new Request();
        $this->cart = new Cart();
    }

    public function index()
    {
        $user = $this->request->requireAuth();
        $data = $this->cart->getCart((int)$user['id']);
        return $this->request->json($data);
    }

    public function createOrReplace()
    {
        $user = $this->request->requireAuth();
        $payload = $this->request->getJson();
        $items = $payload['items'] ?? [];
        $this->cart->saveCart((int)$user['id'], $items);
        return $this->request->json(["message" => "Cart saved", "items" => $items]);
    }

    public function addItem()
    {
        $user = $this->request->requireAuth();
        $payload = $this->request->getJson();
        $updated = $this->cart->addItem((int)$user['id'], $payload);
        return $this->request->json(["items" => $updated]);
    }

    public function removeItem($cartItemId)
    {
        $user = $this->request->requireAuth();
        $updated = $this->cart->removeItem((int)$user['id'], (string)$cartItemId);
        return $this->request->json(["items" => $updated]);
    }
}


