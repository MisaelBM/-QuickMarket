<?php
namespace App\Router;

use App\Request;

/** Lidando com as rotas da aplicação */
class Router {
    static private array $routeList = [];
    private Request $request;

    /** Adiciona rota a lista de rotas */
    static public function addRoute (string $uri, string $method, $action)
    {
        self::$routeList[] = [
            "uri"=>$uri,
            "method"=>$method,
            "action"=>$action
        ];
    }

    /** Verifica se a rota existe */
    public function verifyExistRoute (Request $request)
    {
        $this->request = $request;

        foreach (self::$routeList as $route) {
            if ($this->findMatchUri($route["uri"])) {
                return $route["action"];
            }
        }

        return null;
    }

    /** Faz o dispatch da rota encontrada */
    public function dispatch ($action)
    {
        if (is_callable($action)) {
            return $action();
        }

        $controller = $action[0];
        $method = $action[1] ?? null;

        if (class_exists($controller) && method_exists($controller, $method)) {
            $instance = new $controller();
            return $instance->$method();
        }

        throw new RouterException("Rota inválida ou método inexistente");
    }

    private function findMatchUri(string $uri): bool
    {
        $requestUri = parse_url($this->request->getUri(), PHP_URL_PATH);
        $normalizedUri = rtrim($uri, "/") ?: "/";
        $normalizedRequest = rtrim($requestUri, "/") ?: "/";
        return $normalizedUri === $normalizedRequest;
    }
}


