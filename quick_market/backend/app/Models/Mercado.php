<?php

namespace App\Models;

use App\Database\Database;

class Mercado {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function nearby(): array
    {
    // Simplificação: listar mercados ativos (sem cálculo real de distância)
    $stmt = $this->db->query("SELECT * FROM mercados WHERE ativo = 1");
    return $stmt->fetchAll() ?: [];
    }

    public function menusByMercado(int $mercadoId): array
    {
    $stmt = $this->db->prepare("SELECT * FROM menus WHERE mercado_id = :mid AND ativo = 1");
    $stmt->execute([':mid' => $mercadoId]);
    return $stmt->fetchAll() ?: [];
    }

    public function produtosByMenu(int $mercadoId, int $menuId): array
    {
    $stmt = $this->db->prepare("SELECT * FROM produtos WHERE menu_id = :mid AND disponivel = 1");
    $stmt->execute([':mid' => $menuId]);
    return $stmt->fetchAll() ?: [];
    }

    public function paymentMethods(int $mercadoId): array
    {
    $sql = "SELECT fpm.*, fp.nome, fp.codigo
        FROM formas_pagamento_mercado fpm
        JOIN formas_pagamento fp ON fp.id = fpm.forma_pagamento_id AND fp.ativo = 1
        WHERE fpm.mercado_id = :mid";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([':mid' => $mercadoId]);
    return $stmt->fetchAll() ?: [];
    }

    public function promotions(int $mercadoId): array
    {
    $now = date('Y-m-d');
    $sql = "SELECT * FROM promocoes
        WHERE ativo = 1
          AND data_inicio <= :now AND data_fim >= :now
          AND (mercado_id = :mid OR mercado_id IS NULL)";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([':now' => $now, ':mid' => $mercadoId]);
    return $stmt->fetchAll() ?: [];
    }
}


