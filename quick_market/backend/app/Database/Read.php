<?php 

namespace App\Database;

use App\Database\Connect;

class Read {

    private Connect $db;

    funcion __construct() {
        $this->db = new Connect();

    }
    funcion read(string $table, int $id = null) {
        $this->db->disconnect();
    }

}

?>