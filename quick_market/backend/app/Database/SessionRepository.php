<?php

namespace App\Database;

class SessionRepository {
    private \PDO $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function createToken(int $userId, ?string $device, ?string $ip, int $ttlHours = 24): string
    {
        $token = bin2hex(random_bytes(32));
        $exp = (new \DateTimeImmutable("+{$ttlHours} hours"))->format('Y-m-d H:i:s');
        $stmt = $this->db->prepare("INSERT INTO sessao_usuario (usuario_id, token, expiracao, dispositivo, ip_address) VALUES (:uid, :tok, :exp, :dev, :ip)");
        $stmt->execute([
            ':uid' => $userId,
            ':tok' => $token,
            ':exp' => $exp,
            ':dev' => $device,
            ':ip' => $ip,
        ]);
        return $token;
    }

    public function findUserByToken(string $token): ?array
    {
        $sql = "SELECT u.* FROM sessao_usuario s JOIN usuarios u ON u.id = s.usuario_id WHERE s.token = :tok AND s.expiracao > NOW() LIMIT 1";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':tok' => $token]);
        $user = $stmt->fetch();
        return $user ?: null;
    }

    public function revokeToken(string $token): void
    {
        $stmt = $this->db->prepare("DELETE FROM sessao_usuario WHERE token = :tok");
        $stmt->execute([':tok' => $token]);
    }
}


