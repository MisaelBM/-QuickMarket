<?php

namespace App\Database\Seeders;

final class SessaoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios', ['ativo' => 1]);
        
        foreach ($usuarios as $usuario) {
            if ($this->faker->boolean(30)) {
                $sessaoData = [
                    'usuario_id' => $usuario['id'],
                    'token' => bin2hex(random_bytes(32)),
                    'expiracao' => date('Y-m-d H:i:s', strtotime('+7 days')),
                    'dispositivo' => $this->faker->randomElement(['Android', 'iOS', 'Web']),
                    'ip_address' => $this->faker->ipv4()
                ];
                
                $this->db->insert('sessao_usuario', $sessaoData);
            }
        }
    }
}


