<?php

namespace App\Models;

use App\Database\Database;

class Order {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function create(array $payload): array
    {
        $numero = $payload['numero_pedido'] ?? 'PED-' . strtoupper(bin2hex(random_bytes(4)));
        $sql = "INSERT INTO pedidos (usuario_id, restaurante_id, numero_pedido, status, total, frete, desconto_aplicado, observacoes)
                VALUES (:uid, :rid, :num, :status, :total, :frete, :desc, :obs)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([
            ':uid' => (int)$payload['usuario_id'],
            ':rid' => (int)$payload['restaurante_id'],
            ':num' => $numero,
            ':status' => $payload['status'] ?? 'pendente',
            ':total' => (float)($payload['total'] ?? 0),
            ':frete' => (float)($payload['frete'] ?? 0),
            ':desc' => (float)($payload['desconto_aplicado'] ?? 0),
            ':obs' => $payload['observacoes'] ?? null,
        ]);
        $id = (int)$this->db->lastInsertId();
        $pedido = $this->findById($id);
        return $pedido ?? ['id' => $id, 'numero_pedido' => $numero];
    }

    public function addPayment(array $tx): array
    {
        $sql = "INSERT INTO pagamentos (pedido_id, forma_pagamento_id, valor, status, transacao_id)
                VALUES (:pid, :fpid, :valor, :status, :txid)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([
            ':pid' => (int)$tx['pedido_id'],
            ':fpid' => (int)$tx['forma_pagamento_id'],
            ':valor' => (float)$tx['valor'],
            ':status' => $tx['status'] ?? 'pendente',
            ':txid' => $tx['transacao_id'] ?? null,
        ]);
        $id = (int)$this->db->lastInsertId();
        $row = $this->db->query("SELECT * FROM pagamentos WHERE id = " . (int)$id)->fetch();
        return $row ?: ['id' => $id];
    }

    public function findById(int $id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM pedidos WHERE id = :id LIMIT 1");
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch();
        return $row ?: null;
    }
}


