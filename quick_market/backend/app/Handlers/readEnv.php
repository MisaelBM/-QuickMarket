<?php

namespace App\Handlers;

class readEnv {
    public function getEnv()
    {
        $paths = [
            __DIR__ . '/../../.env',
            __DIR__ . '/../../../.env',
        ];
        $vars = [];
        foreach ($paths as $path) {
            if (!is_file($path)) {
                continue;
            }
            $content = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($content as $line) {
                $line = trim($line);
                if ($line === '' || str_starts_with($line, '#')) {
                    continue;
                }
                $parts = explode('=', $line, 2);
                if (count($parts) === 2) {
                    $key = trim($parts[0]);
                    $value = trim($parts[1]);
                    $vars[$key] = $value;
                }
            }
        }
        foreach ($vars as $k => $v) {
            $_ENV[$k] = $v;
        }
        return $_ENV;
    }
}