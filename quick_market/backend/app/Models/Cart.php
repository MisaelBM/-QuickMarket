<?php

namespace App\Models;

use App\Database\Database;

class Cart {
    private Database $db;

    public function __construct() {

    }

    public function getCart(int $userId): array {

        $cart = $this->db->read("cart", "usuario_id = :uid ORDER BY created_at ASC", [":uid" => $userId]);
        return $cart ?? [];

    }

    public function saveCart(int $userId, array $items): void {

    }

    public function addItem(int $userId, array $item): array {

    }

    public function removeItem(int $userId, string $cartItemId): array {

    }
}