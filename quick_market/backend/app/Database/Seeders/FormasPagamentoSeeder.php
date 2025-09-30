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

        foreach ($data as $item) {
            $itemData = [
                'nome' => $item['nome'],
                'codigo' => $item['codigo'],
                'ativo' => 1
            ];
            
            $this->insertOrUpdate('formas_pagamento', $itemData, ['nome', 'ativo']);
        }
    }
}


