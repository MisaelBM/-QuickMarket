<?php

namespace App\Database\Seeders;

final class ContatosSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios');
        $mercados = $this->getAll('mercados');
        $representantes = $this->getAll('representantes_legais');

        // Contatos dos usuários
        foreach ($usuarios as $usuario) {
            $emailData = [
                'entidade_id' => $usuario['id'],
                'tipo_entidade' => 'usuario',
                'tipo_contato' => 'email',
                'valor' => $usuario['email'],
                'principal' => 1
            ];
            $this->db->insert('contatos', $emailData);

            $telefoneData = [
                'entidade_id' => $usuario['id'],
                'tipo_entidade' => 'usuario',
                'tipo_contato' => 'telefone',
                'valor' => $this->faker->phoneNumber(),
                'principal' => 0
            ];
            $this->db->insert('contatos', $telefoneData);
        }

        // Contatos dos mercados
        foreach ($mercados as $mercado) {
            $emailData = [
                'entidade_id' => $mercado['id'],
                'tipo_entidade' => 'mercado',
                'tipo_contato' => 'email',
                'valor' => $this->faker->companyEmail(),
                'principal' => 1
            ];
            $this->db->insert('contatos', $emailData);
        }

        // Contatos dos representantes
        foreach ($representantes as $representante) {
            $telefoneData = [
                'entidade_id' => $representante['id'],
                'tipo_entidade' => 'representante',
                'tipo_contato' => 'telefone',
                'valor' => $this->faker->cellphoneNumber(),
                'principal' => 1
            ];
            $this->db->insert('contatos', $telefoneData);
        }
    }
}


