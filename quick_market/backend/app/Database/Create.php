<?php

namespace App\Database;

class Create {
    private Connect $connect;

    public function __construct()
    {
        $this->connect = new Connect();
    }

    public function create(string $table, array $data): int
    {
        $db = $this->connect->connect();
        $columns = array_keys($data);
        $placeholders = array_map(fn ($c) => ':' . $c, $columns);
        $sql = 'INSERT INTO ' . $table . ' (' . implode(',', $columns) . ') VALUES (' . implode(',', $placeholders) . ')';
        $stmt = $db->prepare($sql);
        foreach ($data as $key => $value) {
            $stmt->bindValue(':' . $key, $value);
        }
        $stmt->execute();
        return (int)$db->lastInsertId();
    }
}


