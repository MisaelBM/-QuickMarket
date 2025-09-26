<?php

namespace App\Models;

class Mercado {
    private PDO $db;

    public function __construct(){

    }

    public function nearby(): array {

    }

    public function menusByMercado(int $mercadoId): array {

    }

    public function produtosByMenu(int $mercadoId, int $menuId): array {

    }

    public function paymentMethods(int $mercadoId): array {
        
    }
}