<?php

namespace App\Models;

use App\Database\Database;

class Restaurant {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function nearby(): array
    {
        // Simplificação: listar restaurantes ativos (sem cálculo real de distância)
        $stmt = $this->db->query("SELECT * FROM restaurantes WHERE ativo = 1");
        return $stmt->fetchAll() ?: [];
    }

    public function menusByRestaurant(int $restaurantId): array
    {
        $stmt = $this->db->prepare("SELECT * FROM menus WHERE restaurante_id = :rid AND ativo = 1");
        $stmt->execute([':rid' => $restaurantId]);
        return $stmt->fetchAll() ?: [];
    }

    public function dishesByMenu(int $restaurantId, int $menuId): array
    {
        $stmt = $this->db->prepare("SELECT * FROM pratos WHERE menu_id = :mid AND disponivel = 1");
        $stmt->execute([':mid' => $menuId]);
        return $stmt->fetchAll() ?: [];
    }

    public function paymentMethods(int $restaurantId): array
    {
        $sql = "SELECT fpr.*, fp.nome, fp.codigo
                FROM formas_pagamento_restaurante fpr
                JOIN formas_pagamento fp ON fp.id = fpr.forma_pagamento_id AND fp.ativo = 1
                WHERE fpr.restaurante_id = :rid";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':rid' => $restaurantId]);
        return $stmt->fetchAll() ?: [];
    }

    public function promotions(int $restaurantId): array
    {
        $now = date('Y-m-d');
        $sql = "SELECT * FROM promocoes
                WHERE ativo = 1
                  AND data_inicio <= :now AND data_fim >= :now
                  AND (restaurante_id = :rid OR restaurante_id IS NULL)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':now' => $now, ':rid' => $restaurantId]);
        return $stmt->fetchAll() ?: [];
    }
}


