<?php

namespace App\Database;

use PDO;

class Database {
    private Connect $connect;
    private Create $create;
    private Read $read;
    private Update $update;
    private Delete $delete;

    public function __construct()
    {
        $this->connect = new Connect();
        $this->create = new Create();
        $this->read = new Read();
        $this->update = new Update();
        $this->delete = new Delete();
    }

    public function getDb(): PDO
    {
        return $this->connect->connect();
    }

    public function create(string $table, array $data): int
    {
        return $this->create->create($table, $data);
    }

    public function read(string $table, ?string $where = null, array $params = []): array
    {
        return $this->read->read($table, $where, $params);
    }

    public function update(string $table, array $data, string $where, array $params = []): int
    {
        return $this->update->update($table, $data, $where, $params);
    }

    public function delete(string $table, string $where, array $params = []): int
    {
        return $this->delete->delete($table, $where, $params);
    }
}