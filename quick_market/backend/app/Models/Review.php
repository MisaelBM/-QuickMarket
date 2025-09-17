<?php

namespace App\Models;

use App\Database\Database;

class Review {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function create(array $payload): array
    {
        $sql = "INSERT INTO avaliacoes (pedido_id, restaurante_id, nota_estrelas, comentario, nota_entrega)
                VALUES (:pedido, :rest, :estrelas, :comentario, :nota_entrega)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([
            ':pedido' => (int)$payload['pedido_id'],
            ':rest' => (int)$payload['restaurante_id'],
            ':estrelas' => (int)($payload['nota_estrelas'] ?? 0),
            ':comentario' => $payload['comentario'] ?? null,
            ':nota_entrega' => (int)($payload['nota_entrega'] ?? 0),
        ]);
        $id = (int)$this->db->lastInsertId();
        $row = $this->db->query("SELECT * FROM avaliacoes WHERE id = " . (int)$id)->fetch();
        return $row ?: ['id' => $id];
    }

    public function list(array $filters = []): array
    {
        $conds = [];
        $params = [];
        if (isset($filters['restaurante_id'])) {
            $conds[] = 'restaurante_id = :rid';
            $params[':rid'] = (int)$filters['restaurante_id'];
        }
        if (isset($filters['pedido_id'])) {
            $conds[] = 'pedido_id = :pid';
            $params[':pid'] = (int)$filters['pedido_id'];
        }
        $where = $conds ? ('WHERE ' . implode(' AND ', $conds)) : '';
        $stmt = $this->db->prepare("SELECT * FROM avaliacoes $where ORDER BY created_at DESC");
        $stmt->execute($params);
        return $stmt->fetchAll() ?: [];
    }
}


