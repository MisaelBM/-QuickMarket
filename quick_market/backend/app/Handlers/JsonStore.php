<?php

namespace App\Handlers;

class JsonStore {
    private string $path;

    public function __construct(string $filename)
    {
        $dir = __DIR__ . '/../../storage';
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
        $this->path = $dir . '/' . $filename;
        if (!file_exists($this->path)) {
            file_put_contents($this->path, json_encode([]));
        }
    }

    public function all(): array
    {
        $json = file_get_contents($this->path);
        $data = json_decode($json, true);
        return is_array($data) ? $data : [];
    }

    public function putAll(array $data): void
    {
        file_put_contents($this->path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    public function nextId(string $key = 'id'): int
    {
        $items = $this->all();
        $max = 0;
        foreach ($items as $item) {
            if (isset($item[$key]) && $item[$key] > $max) {
                $max = (int)$item[$key];
            }
        }
        return $max + 1;
    }
}


