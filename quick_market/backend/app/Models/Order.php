<?php

namespace App\Models;

use App\Database\Database;

class Order {
    private \App\Database\SupabaseClient $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function create(array $payload): array
    {
        $numero = $payload['numero_pedido'] ?? 'PED-' . strtoupper(bin2hex(random_bytes(4)));
        
        $data = [
            'usuario_id' => (int)$payload['usuario_id'],
            'mercado_id' => (int)$payload['mercado_id'],
            'numero_pedido' => $numero,
            'status' => $payload['status'] ?? 'pendente',
            'total' => (float)($payload['total'] ?? 0),
            'frete' => (float)($payload['frete'] ?? 0),
            'desconto_aplicado' => (float)($payload['desconto_aplicado'] ?? 0),
            'observacoes' => $payload['observacoes'] ?? null,
        ];

        $result = $this->db->insert('pedidos', $data);
        
        if (!empty($result)) {
            return $result[0];
        }
        
        return ['numero_pedido' => $numero];
    }

    public function addPayment(array $tx): array
    {
        $data = [
            'pedido_id' => (int)$tx['pedido_id'],
            'forma_pagamento_id' => (int)$tx['forma_pagamento_id'],
            'valor' => (float)$tx['valor'],
            'status' => $tx['status'] ?? 'pendente',
            'transacao_id' => $tx['transacao_id'] ?? null,
        ];

        $result = $this->db->insert('pagamentos', $data);
        
        if (!empty($result)) {
            return $result[0];
        }
        
        return ['id' => null];
    }

    public function findById(int $id): ?array
    {
        $result = $this->db->select('pedidos', ['id' => $id], ['limit' => 1]);
        return !empty($result) ? $result[0] : null;
    }
}


