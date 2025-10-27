<?php

namespace App\Database\Seeders;

final class NotificacoesSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios', ['ativo' => 1]);
        
        foreach ($usuarios as $usuario) {
            $qtd = $this->faker->numberBetween(1, 3);
            for ($i = 0; $i < $qtd; $i++) {
                $notificacaoData = [
                    'usuario_id' => $usuario['id'],
                    'titulo' => $this->faker->sentence(4),
                    'mensagem' => $this->faker->sentence(12),
                    'tipo' => $this->faker->randomElement(['pedido','promocao','aviso']),
                    'lida' => $this->faker->boolean(30) ? 1 : 0
                ];
                
                $this->db->insert('notificacoes', $notificacaoData);
            }
        }
    }
}


