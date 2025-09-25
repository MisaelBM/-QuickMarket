<?php 

namespace App\Database;

use App\Database\Connect;

class Read {

    private Connect $db;

    public function __construct() {
        $this->db = new Connect();

    }
    public function read(string $table, int $id = null) {

    }

}