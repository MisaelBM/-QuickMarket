<?php

namespace App\Database\Seeders;

final class MercadosSeeder extends Seeder
{
    public function run(): void
    {
    $stmt = $this->db->prepare('INSERT INTO mercados (nome, descricao, cnpj, categoria_principal, tempo_medio_preparo, taxa_entrega, status, ativo) VALUES (:nome, :descricao, :cnpj, :categoria, :tempo, :taxa, :status, 1)');

        for ($i = 0; $i < 10; $i++) {
            $stmt->execute([
                ':nome' => $this->faker->company(),
                ':descricao' => $this->faker->sentence(10),
                ':cnpj' => $this->generateCnpj(),
                ':categoria' => $this->faker->randomElement(['Pizza', 'Hambúrguer', 'Japonesa', 'Brasileira', 'Saudável']),
                ':tempo' => $this->faker->numberBetween(15, 60),
                ':taxa' => $this->faker->randomFloat(2, 0, 20),
                ':status' => 'aberto',
            ]);
        }

        // Representantes e endereços
    $mercados = $this->db->query('SELECT id FROM mercados')->fetchAll();
    $repStmt = $this->db->prepare('INSERT INTO representantes_legais (mercado_id, nome, cpf, data_nascimento) VALUES (:mid, :nome, :cpf, :nasc)');
    $addrStmt = $this->db->prepare('INSERT INTO endereco_mercado (mercado_id, rua, numero, complemento, bairro, cidade, estado, cep, latitude, longitude, principal) VALUES (:mid, :rua, :numero, :comp, :bairro, :cidade, :estado, :cep, :lat, :lng, :principal)');
    foreach ($mercados as $m) {
            $repStmt->execute([
                ':mid' => $m['id'],
                ':nome' => $this->faker->name(),
                ':cpf' => $this->generateCpf(),
                ':nasc' => $this->faker->date('Y-m-d', '-21 years'),
            ]);

            $addrStmt->execute([
                ':mid' => $m['id'],
                ':rua' => $this->faker->streetName(),
                ':numero' => (string)$this->faker->buildingNumber(),
                ':comp' => null,
                ':bairro' => $this->faker->citySuffix(),
                ':cidade' => $this->faker->city(),
                ':estado' => 'SP',
                ':cep' => $this->faker->postcode(),
                ':lat' => $this->faker->latitude(-23.7, -23.4),
                ':lng' => $this->faker->longitude(-46.8, -46.3),
                ':principal' => 1,
            ]);
        }
    }
}


