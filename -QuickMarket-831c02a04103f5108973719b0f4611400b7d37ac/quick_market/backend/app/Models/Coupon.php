<?php

namespace App\Models;

use App\Database\Database;

class Coupon {
    private \App\Database\SupabaseClient $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function listAvailable(?int $userId = null): array
    {
        $now = date('Y-m-d');
        $sql = "SELECT * FROM cupons WHERE ativo = 1 AND data_inicio <= ? AND data_fim >= ? AND (limite_uso_total IS NULL OR uso_atual < limite_uso_total)";
        $list = $this->db->query($sql, [$now, $now]);
        
        if ($userId) {
            // opcional: filtrar por cupons do usuário, se necessário
        }
        return $list;
    }
}


