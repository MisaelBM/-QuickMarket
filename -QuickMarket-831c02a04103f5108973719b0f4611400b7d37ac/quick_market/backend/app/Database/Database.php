<?php

namespace App\Database;

use App\Database\SupabaseClient;

class Database {
    private SupabaseClient $db;

    public function __construct()
    {
        $this->db = new SupabaseClient();
    }

    public function getDb(): SupabaseClient
    {
        return $this->db;
    }
}