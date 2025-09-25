<?php

namespace App\Database;

class SessionRepository {
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function createToken(int $userId, ?string $device, ?string $ip, int $ttlHours = 24): string
    {
        $token = bin2hex(random_bytes(32));
        $exp = (new \DateTimeImmutable("+{$ttlHours} hours"))->format('Y-m-d H:i:s');
        $this->db->create('sessao_usuario', [
            'usuario_id' => $userId,
            'token' => $token,
            'expiracao' => $exp,
            'dispositivo' => $device,
            'ip_address' => $ip,
        ]);
        return $token;
    }

    public function findUserByToken(string $token): ?array
    {
        // Sem suporte a joins na fachada; consulta em duas etapas
        $sessions = $this->db->read('sessao_usuario', 'token = :tok AND expiracao > NOW() LIMIT 1', [':tok' => $token]);
        $session = $sessions[0] ?? null;
        if (!$session) { return null; }
        $users = $this->db->read('usuarios', 'id = :id LIMIT 1', [':id' => (int)$session['usuario_id']]);
        return $users[0] ?? null;
    }

    public function revokeToken(string $token): void
    {
        $this->db->delete('sessao_usuario', 'token = :tok', [':tok' => $token]);
    }
}


