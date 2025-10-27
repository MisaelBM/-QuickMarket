<?php
use App\Request;
use App\Routes\Route;

require_once __DIR__ . '/../vendor/autoload.php';

// Start PHP session for authentication/cart state
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Registrar rotas
require_once __DIR__ . '/../app/Routes/web.php';

$request = new Request();
$router = new Route();

$action = $router->verifyExistRoute($request);

if ($action === null) {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Rota não encontrada']);
    return;
}

$router->dispatch($action);


