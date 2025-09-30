<?php

namespace App\Models;

use App\Database\Database;

class Mercado {
    private \App\Database\SupabaseClient $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function nearby(): array
    {
        // Simplificação: listar mercados ativos (sem cálculo real de distância)
        return $this->db->select('mercados', ['ativo' => 1]);
    }

    public function menusByMercado(int $mercadoId): array
    {
        return $this->db->select('menus', ['mercado_id' => $mercadoId, 'ativo' => 1]);
    }

    public function produtosByMenu(int $mercadoId, int $menuId): array
    {
        return $this->db->select('produtos', ['menu_id' => $menuId, 'disponivel' => 1]);
    }

    public function paymentMethods(int $mercadoId): array
    {
        // Para JOINs complexos, usamos query SQL direta
        $sql = "SELECT fpm.*, fp.nome, fp.codigo
            FROM formas_pagamento_mercado fpm
            JOIN formas_pagamento fp ON fp.id = fpm.forma_pagamento_id AND fp.ativo = 1
            WHERE fpm.mercado_id = ?";
        return $this->db->query($sql, [$mercadoId]);
    }

    public function promotions(int $mercadoId): array
    {
        $now = date('Y-m-d');
        $sql = "SELECT * FROM promocoes
            WHERE ativo = 1
              AND data_inicio <= ? AND data_fim >= ?
              AND (mercado_id = ? OR mercado_id IS NULL)";
        return $this->db->query($sql, [$now, $now, $mercadoId]);
    }
}


