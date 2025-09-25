<?php

namespace App\Database;

use App\Database\Connect;

class Update {
private Connect $db;

    public function __construct() {
        $this->db = new Connect();
    }

    public function update(string $table, int $id, array $data) {

    }

}