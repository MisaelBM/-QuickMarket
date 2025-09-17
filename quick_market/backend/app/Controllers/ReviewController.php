<?php

namespace App\Controllers;

use App\Request;
use App\Models\Review;

class ReviewController {
    private Request $request;
    private Review $reviews;

    public function __construct()
    {
        $this->request = new Request();
        $this->reviews = new Review();
    }

    public function index()
    {
        $filters = [];
        if (isset($_GET['restaurante_id'])) {
            $filters['restaurante_id'] = (int)$_GET['restaurante_id'];
        }
        if (isset($_GET['pedido_id'])) {
            $filters['pedido_id'] = (int)$_GET['pedido_id'];
        }
        $data = $this->reviews->list($filters);
        return $this->request->json($data);
    }

    public function create()
    {
        $user = $this->request->requireAuth();
        $payload = $this->request->getJson();
        $payload['usuario_id'] = (int)$user['id'];
        $review = $this->reviews->create($payload);
        return $this->request->json(['message' => 'Avaliação criada', 'avaliacao' => $review], 201);
    }
}


