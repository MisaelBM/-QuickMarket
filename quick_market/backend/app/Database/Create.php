<?php

namespace App\Database;

class Create {

    private Connect $db;

    public function __construct() {
        $this->db = new Connect();
    }

    public function create(string $table, array $data, string $where = null) {
        
    }

}