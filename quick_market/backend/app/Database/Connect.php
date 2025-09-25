<?php

namespace App\Database;

use PDO;
use PDOException;
use App\Handlers\readEnv;

class Connect {
    private string $host;
    private string $database;
    private string $username;
    private string $password;
    private string $driver;
    private string $charset;
    private ?PDO $pdo = null;

    public function __construct()
    {
        $envReader = new readEnv();
        $env = $envReader->getEnv();

        $this->host = (string)($env['DB_HOST'] ?? 'localhost');
        $this->database = (string)($env['DB_NAME'] ?? '');
        $this->username = (string)($env['DB_USER'] ?? ($env['DB_USERNAME'] ?? 'root'));
        $this->password = (string)($env['DB_PASS'] ?? ($env['DB_PASSWORD'] ?? ''));
        $this->driver = (string)($env['DB_DRIVER'] ?? 'mysql');
        $this->charset = (string)($env['DB_CHARSET'] ?? 'utf8mb4');
    }

    public function connect(): PDO
    {
        if ($this->pdo instanceof PDO) {
            return $this->pdo;
        }

        $dsn = sprintf('%s:host=%s;dbname=%s;charset=%s', $this->driver, $this->host, $this->database, $this->charset);

        try {
            $this->pdo = new PDO($dsn, $this->username, $this->password, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        } catch (PDOException $e) {
            // In a real app, you'd log this securely
            throw $e;
        }

        if (!($this->pdo instanceof PDO)) {
            throw new PDOException('Failed to initialize database connection');
        }
        return $this->pdo;
    }

    public function disconnect(): void
    {
        $this->pdo = null;
    }
}


