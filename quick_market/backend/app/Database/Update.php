<?php

namespace App\Database;

class Update {
    private Connect $connect;

    public function __construct()
    {
        $this->connect = new Connect();
    }

    public function update(string $table, array $data, string $where, array $params = []): int
    {
        $db = $this->connect->connect();
        $setParts = [];
        foreach (array_keys($data) as $col) {
            $setParts[] = $col . ' = :' . $col;
        }
        $sql = 'UPDATE ' . $table . ' SET ' . implode(', ', $setParts) . ' WHERE ' . $where;
        $stmt = $db->prepare($sql);
        foreach ($data as $key => $value) {
            $stmt->bindValue(':' . $key, $value);
        }
        foreach ($params as $key => $value) {
            $stmt->bindValue(is_string($key) ? $key : (string)$key, $value);
        }
        $stmt->execute();
        return $stmt->rowCount();
    }
}


