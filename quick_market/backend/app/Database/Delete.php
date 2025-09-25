<?php

namespace App\Database;

class Delete {
    private Connect $connect;

    public function __construct()
    {
        $this->connect = new Connect();
    }

    public function delete(string $table, string $where, array $params = []): int
    {
        $db = $this->connect->connect();
        $sql = 'DELETE FROM ' . $table . ' WHERE ' . $where;
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt->rowCount();
    }
}


