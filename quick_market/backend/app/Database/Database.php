<?php

namespace App\Database;

use PDO;
use App\Database\Connect;
use App\Database\Create;
use App\Database\Read;
use App\Database\Update;
use App\Database\Delete;

class Database {

    private Connect $db;
    private Create $create;
    private Read $read;
    private Update $update;
    private Delete $delete;


    public function __construct(Connect $connect, Create $create, Read $read, Update $update, Delete $delete) {

    }

    public function connect() {

    }

    public function create (string $table, array $data, string $where = null) {

    }

    public function read (string $table, int $id) {

    }

    public function update (string $table, int $id, array $data) {

    }

    public function delete (string $table, int $id) {

    }

}