<?php
use App\Request;
use App\Routes\Route;

require_once __DIR__ . '/../vendor/autoload.php';

// Registrar rotas
require_once __DIR__ . '/../app/Routes/web.php';

$request = new Request();
$router = new Route();

$action = $router->verifyExistRoute($request);

if ($action === null) {
    http_response_code(404);
    echo '404 - Rota não encontrada';
    return;
}

$router->dispatch($action);


