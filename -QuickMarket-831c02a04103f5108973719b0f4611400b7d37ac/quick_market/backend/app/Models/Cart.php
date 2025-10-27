<?php

namespace App\Models;

use App\Database\Database;

class Cart {
    private \App\Database\SupabaseClient $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function getCart(int $userId): array
    {
        return $this->db->select('carrinho_usuario', ['usuario_id' => $userId], ['order' => 'created_at.asc']);
    }

    public function saveCart(int $userId, array $items): void
    {
        // Remove todos os itens do carrinho do usuário
        $this->db->delete('carrinho_usuario', ['usuario_id' => $userId]);
        
        // Adiciona os novos itens
        foreach ($items as $item) {
            $data = [
                'usuario_id' => $userId,
                'produto_id' => (int)($item['produto_id'] ?? 0),
                'quantidade' => (int)($item['quantidade'] ?? 1),
                'observacoes' => $item['observacoes'] ?? null,
                'preco_unitario' => (float)($item['preco_unitario'] ?? 0),
            ];
            $this->db->insert('carrinho_usuario', $data);
        }
    }

    public function addItem(int $userId, array $item): array
    {
        $data = [
            'usuario_id' => $userId,
            'produto_id' => (int)($item['produto_id'] ?? 0),
            'quantidade' => (int)($item['quantidade'] ?? 1),
            'observacoes' => $item['observacoes'] ?? null,
            'preco_unitario' => (float)($item['preco_unitario'] ?? 0),
        ];
        
        $this->db->insert('carrinho_usuario', $data);
        return $this->getCart($userId);
    }

    public function removeItem(int $userId, string $cartItemId): array
    {
        $this->db->delete('carrinho_usuario', ['id' => $cartItemId, 'usuario_id' => $userId]);
        return $this->getCart($userId);
    }
}


