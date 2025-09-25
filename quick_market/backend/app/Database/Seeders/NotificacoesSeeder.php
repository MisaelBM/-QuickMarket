<?php

namespace App\Database\Seeders;

final class NotificacoesSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->db->query('SELECT id FROM usuarios WHERE ativo = 1')->fetchAll();
        $stmt = $this->db->prepare("INSERT INTO notificacoes (usuario_id, titulo, mensagem, tipo, lida) VALUES (:uid, :titulo, :mensagem, :tipo, :lida)");
        foreach ($usuarios as $u) {
            $qtd = $this->faker->numberBetween(1, 3);
            for ($i = 0; $i < $qtd; $i++) {
                $stmt->execute([
                    ':uid' => $u['id'],
                    ':titulo' => $this->faker->sentence(4),
                    ':mensagem' => $this->faker->sentence(12),
                    ':tipo' => $this->faker->randomElement(['pedido','promocao','aviso']),
                    ':lida' => $this->faker->boolean(30) ? 1 : 0,
                ]);
            }
        }
    }
}




