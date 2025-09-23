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
        if (isset($_GET['mercados_id'])) {
            $filters['mercados_id'] = (int)$_GET['mercados_id'];
        }
        if (isset($_GET['pedidos_id'])) {
            $filters['pedidos_id'] = (int)$_GET['pedidos_id'];
        }
        $data = $this->reviews->list($filters);
        return $this->request->json($data);
    }

    public function create()
    {
        $user = $this->request->requireAuth();
        $payload = $this->request->getJson();
        $payload['usuarios_id'] = (int)$user['id'];
        $review = $this->reviews->create($payload);
        return $this->request->json(['message' => 'Avaliação criada', 'avaliacao' => $review], 201);
    }
}


