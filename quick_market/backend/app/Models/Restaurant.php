<?php

namespace App\Models;

use App\Database\Database;

class Restaurant {
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function nearby(): array
    {
        return $this->db->read('restaurantes', 'ativo = 1');
    }

    public function menusByRestaurant(int $restaurantId): array
    {
        return $this->db->read('menus', 'restaurante_id = :rid AND ativo = 1', [':rid' => $restaurantId]);
    }

    public function dishesByMenu(int $restaurantId, int $menuId): array
    {
        return $this->db->read('pratos', 'menu_id = :mid AND disponivel = 1', [':mid' => $menuId]);
    }

    public function paymentMethods(int $restaurantId): array
    {
        // Mantendo interface Database: aqui não há join direto, então usamos uma leitura simples em fpr e resolvemos nomes/códigos depois se necessário.
        return $this->db->read('formas_pagamento_restaurante', 'restaurante_id = :rid', [':rid' => $restaurantId]);
    }

    public function promotions(int $restaurantId): array
    {
        $now = date('Y-m-d');
        return $this->db->read(
            'promocoes',
            'ativo = 1 AND data_inicio <= :now AND data_fim >= :now AND (restaurante_id = :rid OR restaurante_id IS NULL)',
            [':now' => $now, ':rid' => $restaurantId]
        );
    }
}


