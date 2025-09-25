<?php

namespace App\Database\Seeders;

final class FormasPagamentoSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['nome' => 'Cartão de Crédito', 'codigo' => 'CC'],
            ['nome' => 'Cartão de Débito', 'codigo' => 'CD'],
            ['nome' => 'Pix', 'codigo' => 'PIX'],
            ['nome' => 'Dinheiro', 'codigo' => 'CASH'],
            ['nome' => 'Vale Refeição', 'codigo' => 'VR'],
        ];

        $stmt = $this->db->prepare('INSERT INTO formas_pagamento (nome, codigo, ativo) VALUES (:nome, :codigo, 1) ON DUPLICATE KEY UPDATE nome = VALUES(nome), ativo = 1');
        foreach ($data as $item) {
            $stmt->execute([':nome' => $item['nome'], ':codigo' => $item['codigo']]);
        }
    }
}




