<?php

namespace App\Database\Seeders;

use App\Database\Database;
use Faker\Factory as FakerFactory;

abstract class Seeder
{
    protected \App\Database\SupabaseClient $db;
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

    /**
     * Insert data with ON DUPLICATE KEY UPDATE support for Supabase
     */
    protected function insertOrUpdate(string $table, array $data, array $updateColumns = []): array
    {
        try {
            // Try to insert first
            return $this->db->insert($table, $data);
        } catch (\Exception $e) {
            // If insert fails due to duplicate key, try update
            if (strpos($e->getMessage(), 'duplicate') !== false || strpos($e->getMessage(), 'unique') !== false) {
                if (!empty($updateColumns)) {
                    // Update only specified columns
                    $updateData = array_intersect_key($data, array_flip($updateColumns));
                    return $this->db->update($table, $updateData, ['id' => $data['id'] ?? null]);
                }
            }
            throw $e;
        }
    }

    /**
     * Execute raw SQL query (for complex operations)
     */
    protected function executeQuery(string $sql, array $params = []): array
    {
        return $this->db->query($sql, $params);
    }

    /**
     * Get all records from a table
     */
    protected function getAll(string $table, array $filters = []): array
    {
        return $this->db->select($table, $filters);
    }
}


