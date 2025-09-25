<?php

namespace App\Models;

use App\Database\Database;

class User {
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function findByEmail(string $email): ?array
    {
        $rows = $this->db->read('usuarios', 'email = :email LIMIT 1', [':email' => $email]);
        return $rows[0] ?? null;
    }

    public function findById(int $id): ?array
    {
        $rows = $this->db->read('usuarios', 'id = :id LIMIT 1', [':id' => $id]);
        return $rows[0] ?? null;
    }
}


