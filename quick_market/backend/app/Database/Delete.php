<?php 

namespace App\Database;

use App\Database\Connect;

class Delete {

    private Connect $db;

    public function __construct() {
        $this->db = new Connect();

    }

    public function delete(string $table, int $id) {
        $this->db->disconnect();

    }

}

?>