<?php

namespace App\Models;

use App\Database\Database;

class Coupon {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function listAvailable(?int $userId = null): array
    {
        $now = date('Y-m-d');
        $sql = "SELECT * FROM cupons WHERE ativo = 1 AND data_inicio <= :now AND data_fim >= :now AND (limite_uso_total IS NULL OR uso_atual < limite_uso_total)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':now' => $now]);
        $list = $stmt->fetchAll() ?: [];
        if ($userId) {
            // opcional: filtrar por cupons do usuário, se necessário
        }
        return $list;
    }
}


