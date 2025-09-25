<?php

namespace App\Database\Seeders;

final class SessaoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id FROM usuarios WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare('INSERT INTO sessao_usuario (usuario_id, token, expiracao, dispositivo, ip_address) VALUES (:uid, :token, :exp, :disp, :ip)');
        foreach ($usuarios as $u) {
            if ($this->faker->boolean(30)) {
                $stmt->execute([
                    ':uid' => $u['id'],
                    ':token' => bin2hex(random_bytes(32)),
                    ':exp' => date('Y-m-d H:i:s', strtotime('+7 days')),
                    ':disp' => $this->faker->randomElement(['Android', 'iOS', 'Web']),
                    ':ip' => $this->faker->ipv4(),
                ]);
            }
        }
    }
}




