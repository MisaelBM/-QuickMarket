<?php

namespace App\Database\Seeders;

final class CarrinhoUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios', ['ativo' => 1]);
        $produtos = $this->getAll('produtos');
        
        foreach ($usuarios as $usuario) {
            $itens = $this->faker->numberBetween(0, 3);
            for ($i = 0; $i < $itens; $i++) {
                $produto = $this->faker->randomElement($produtos);
                $qtd = $this->faker->numberBetween(1, 3);
                
                $carrinhoData = [
                    'usuario_id' => $usuario['id'],
                    'produto_id' => $produto['id'],
                    'quantidade' => $qtd,
                    'observacoes' => $this->faker->optional()->sentence(5),
                    'preco_unitario' => $produto['preco']
                ];
                
                $this->db->insert('carrinho_usuario', $carrinhoData);
            }
        }
    }
}


