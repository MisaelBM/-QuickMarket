<?php
namespace Config;

class Exception {
    public function throw(string $message)
    {
        throw new \Exception($message);
    }
}


