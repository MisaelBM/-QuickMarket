<?php

namespace App\Database;

use PDO;

class Database {
    private $db;

    public function __construct()
    {
        $this->db = new PDO('mysql:host=localhost;dbname=quickmarket', 'root', '');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    }

    public function getDb()
    {
        return $this->db;
    }
}