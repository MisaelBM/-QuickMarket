<?php

namespace App\Database\Seeders;

use App\Database\Database;
use Faker\Factory as FakerFactory;

abstract class Seeder
{
    protected \PDO $db;
    protected \Faker\Generator $faker;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
        $this->faker = FakerFactory::create('pt_BR');
    }

    abstract public function run(): void;

    protected function generateNumericString(int $length): string
    {
        $digits = '';
        for ($i = 0; $i < $length; $i++) {
            $digits .= (string)random_int(0, 9);
        }
        return $digits;
    }

    protected function generateCpf(): string
    {
        // Simplified non-validated CPF: 11 digits
        return $this->generateNumericString(11);
    }

    protected function generateCnpj(): string
    {
        // Simplified non-validated CNPJ: 14 digits
        return $this->generateNumericString(14);
    }
}


