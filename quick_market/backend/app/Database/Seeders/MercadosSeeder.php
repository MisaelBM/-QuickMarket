<?php

namespace App\Database\Seeders;

final class MercadosSeeder extends Seeder
{
    public function run(): void
    {
        // Create mercados
        for ($i = 0; $i < 10; $i++) {
            $mercadoData = [
                'nome' => $this->faker->company(),
                'descricao' => $this->faker->sentence(10),
                'cnpj' => $this->generateCnpj(),
                'categoria_principal' => $this->faker->randomElement(['Pizza', 'Hambúrguer', 'Japonesa', 'Brasileira', 'Saudável']),
                'tempo_medio_preparo' => $this->faker->numberBetween(15, 60),
                'taxa_entrega' => $this->faker->randomFloat(2, 0, 20),
                'status' => 'aberto',
                'ativo' => 1
            ];
            
            $this->db->insert('mercados', $mercadoData);
        }

        // Get created mercados
        $mercados = $this->getAll('mercados');
        
        // Create representantes and endereços for each mercado
        foreach ($mercados as $mercado) {
            // Representante legal
            $repData = [
                'mercado_id' => $mercado['id'],
                'nome' => $this->faker->name(),
                'cpf' => $this->generateCpf(),
                'data_nascimento' => $this->faker->date('Y-m-d', '-21 years')
            ];
            $this->db->insert('representantes_legais', $repData);

            // Endereço do mercado
            $addrData = [
                'mercado_id' => $mercado['id'],
                'rua' => $this->faker->streetName(),
                'numero' => (string)$this->faker->buildingNumber(),
                'complemento' => null,
                'bairro' => $this->faker->citySuffix(),
                'cidade' => $this->faker->city(),
                'estado' => 'SP',
                'cep' => $this->faker->postcode(),
                'latitude' => $this->faker->latitude(-23.7, -23.4),
                'longitude' => $this->faker->longitude(-46.8, -46.3),
                'principal' => 1
            ];
            $this->db->insert('endereco_mercado', $addrData);
        }
    }
}


