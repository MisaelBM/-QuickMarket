<?php

namespace App\Models;

use App\Database\Database;

class Cart {
    private Database $db;

    public function __construct() {

    }

    public function getCart(int $userId): array {

    }

    public function saveCart(int $userId, array $items): void {

    }

    public function addItem(int $userId, array $item): array {

    }

    public function removeItem(int $userId, string $cartItemId): array {

    }
}