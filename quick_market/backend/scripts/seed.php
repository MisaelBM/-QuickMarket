<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Database\Seeders\DatabaseSeeder;

$fresh = in_array('--fresh', $argv, true);

$seeder = new DatabaseSeeder();
$seeder->run($fresh);


