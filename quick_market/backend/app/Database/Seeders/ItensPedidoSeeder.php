<?php

namespace App\Database\Seeders;

final class ItensPedidoSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = $this->getAll('pedidos');
        $produtos = $this->getAll('produtos');
        
        foreach ($pedidos as $pedido) {
            $qtdItens = $this->faker->numberBetween(1, 4);
            for ($i = 0; $i < $qtdItens; $i++) {
                $produto = $this->faker->randomElement($produtos);
                $qtd = $this->faker->numberBetween(1, 3);
                
                $itemData = [
                    'pedido_id' => $pedido['id'],
                    'produto_id' => $produto['id'],
                    'quantidade' => $qtd,
                    'preco_unitario' => $produto['preco'],
                    'customizacoes' => json_encode(['observacoes' => $this->faker->optional()->sentence(5)])
                ];
                
                $this->db->insert('itens_pedido', $itemData);
            }
        }
    }
}


