<?php

namespace App\Models;

use App\Database\Database;

class Cart {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function getCart(int $userId): array
    {
        $stmt = $this->db->prepare("SELECT * FROM carrinho_usuario WHERE usuario_id = :uid ORDER BY created_at ASC");
        $stmt->execute([':uid' => $userId]);
        return $stmt->fetchAll() ?: [];
    }

    public function saveCart(int $userId, array $items): void
    {
        $this->db->beginTransaction();
        $del = $this->db->prepare("DELETE FROM carrinho_usuario WHERE usuario_id = :uid");
        $del->execute([':uid' => $userId]);
        $ins = $this->db->prepare("INSERT INTO carrinho_usuario (usuario_id, prato_id, quantidade, observacoes, preco_unitario) VALUES (:uid, :pid, :qtd, :obs, :preco)");
        foreach ($items as $it) {
            $ins->execute([
                ':uid' => $userId,
                ':pid' => (int)($it['prato_id'] ?? 0),
                ':qtd' => (int)($it['quantidade'] ?? 1),
                ':obs' => $it['observacoes'] ?? null,
                ':preco' => (float)($it['preco_unitario'] ?? 0),
            ]);
        }
        $this->db->commit();
    }

    public function addItem(int $userId, array $item): array
    {
        $stmt = $this->db->prepare("INSERT INTO carrinho_usuario (usuario_id, prato_id, quantidade, observacoes, preco_unitario) VALUES (:uid, :pid, :qtd, :obs, :preco)");
        $stmt->execute([
            ':uid' => $userId,
            ':pid' => (int)($item['prato_id'] ?? 0),
            ':qtd' => (int)($item['quantidade'] ?? 1),
            ':obs' => $item['observacoes'] ?? null,
            ':preco' => (float)($item['preco_unitario'] ?? 0),
        ]);
        return $this->getCart($userId);
    }

    public function removeItem(int $userId, string $cartItemId): array
    {
        $stmt = $this->db->prepare("DELETE FROM carrinho_usuario WHERE id = :id AND usuario_id = :uid");
        $stmt->execute([':id' => $cartItemId, ':uid' => $userId]);
        return $this->getCart($userId);
    }
}


