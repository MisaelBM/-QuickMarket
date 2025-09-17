<?php

namespace App\Handlers;

class readEnv {
    public function getEnv()
    {
        $env = file_get_contents(__DIR__ . '/../../.env');
        $env = explode("\n", $env);
        foreach ($env as $line) {
            $line = explode("=", $line);
            $_ENV[$line[0]] = $line[1];
        }
        return $_ENV;
    }
}

