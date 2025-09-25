<?php

namespace App\Router;

use App\Router\Request;

class Router {

    static private $route;

    static public function addRoute(string $uri, string $method, $action) {

    }

    public function verifyExistRoute(Request $request): mixed {

    }

    public function dispatch ($action): mixed {

    }

    public function findMatchUri(string $uri) {

    }

}