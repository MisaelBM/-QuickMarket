<?php

namespace App\Database;

class Read {
    private Connect $connect;

    public function __construct()
    {
        $this->connect = new Connect();
    }

    public function read(string $table, ?string $where = null, array $params = []): array
    {
        $db = $this->connect->connect();
        $sql = 'SELECT * FROM ' . $table;
        if ($where) {
            $sql .= ' WHERE ' . $where;
        }
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }
}


