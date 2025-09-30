<?php

namespace App\Models;

use App\Database\Database;

class Review {
    private \App\Database\SupabaseClient $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function create(array $payload): array
    {
        $data = [
            'pedido_id' => (int)$payload['pedido_id'],
            'mercado_id' => (int)$payload['mercado_id'],
            'nota_estrelas' => (int)($payload['nota_estrelas'] ?? 0),
            'comentario' => $payload['comentario'] ?? null,
            'nota_entrega' => (int)($payload['nota_entrega'] ?? 0),
        ];

        $result = $this->db->insert('avaliacoes', $data);
        
        if (!empty($result)) {
            return $result[0];
        }
        
        return ['id' => null];
    }

    public function list(array $filters = []): array
    {
        $whereConditions = [];
        $params = [];
        
        if (isset($filters['mercado_id'])) {
            $whereConditions[] = 'mercado_id = ?';
            $params[] = (int)$filters['mercado_id'];
        }
        if (isset($filters['pedido_id'])) {
            $whereConditions[] = 'pedido_id = ?';
            $params[] = (int)$filters['pedido_id'];
        }
        
        $where = $whereConditions ? ('WHERE ' . implode(' AND ', $whereConditions)) : '';
        $sql = "SELECT * FROM avaliacoes $where ORDER BY created_at DESC";
        
        return $this->db->query($sql, $params);
    }
}


