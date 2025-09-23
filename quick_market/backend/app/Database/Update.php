<?php

namespace App\Database;

use App\Database\Connect;

class Update {
private Connect $db;

    function __construct() {
        $this->db = new Connect();

    }

    funcion update(string $table, int $id, array $data) {
        $this->db->disconnect();
    }

}


?>


