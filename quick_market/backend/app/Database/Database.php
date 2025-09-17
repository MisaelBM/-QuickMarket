<?php

namespace App\Database;

use PDO;
use App\Handlers\readEnv;

class Database {
    private $db;

    public function __construct()
    {
        $env = new readEnv();
        $env = $env->getEnv();

        $host = $env['DB_HOST'] ?? 'localhost';
        $name = $env['DB_NAME'] ?? '';
        $user = $env['DB_USER'] ?? ($env['DB_USERNAME'] ?? 'root');
        $pass = $env['DB_PASS'] ?? ($env['DB_PASSWORD'] ?? '');
        $charset = $env['DB_CHARSET'] ?? 'utf8mb4';

        $dsn = "mysql:host={$host};dbname={$name};charset={$charset}";

        $this->db = new PDO($dsn, $user, $pass);
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    }

    public function getDb()
    {
        return $this->db;
    }
}