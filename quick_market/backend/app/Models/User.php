<?php

namespace App\Models;

use App\Database\Database;

class User {
    private \App\Database\SupabaseClient $db;

    public function __construct()
    {
        $this->db = (new Database())->getDb();
    }

    public function findByEmail(string $email): ?array
    {
        $result = $this->db->select('usuarios', ['email' => $email], ['limit' => 1]);
        return !empty($result) ? $result[0] : null;
    }

    public function findById(int $id): ?array
    {
        $result = $this->db->select('usuarios', ['id' => $id], ['limit' => 1]);
        return !empty($result) ? $result[0] : null;
    }
}


