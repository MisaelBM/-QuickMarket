<?php
namespace App;

use App\Database\SessionRepository;

class Request {
    public function getUri ()
    {
        return $_SERVER["REQUEST_URI"];
    }

    public function getMethod ()
    {
        return $_SERVER["REQUEST_METHOD"];
    }

    public function getJson(): array
    {
        $raw = file_get_contents('php://input');
        $data = json_decode($raw, true);
        return is_array($data) ? $data : [];
    }

    public function json($data, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($data);
    }

    public function requireAuth(): array
    {
        $token = $this->getBearerToken();
        if (!$token) {
            http_response_code(401);
            header('Content-Type: application/json');
            echo json_encode(["error" => "Unauthenticated"]);
            exit;
        }
        $repo = new SessionRepository();
        $user = $repo->findUserByToken($token);
        if (!$user) {
            http_response_code(401);
            header('Content-Type: application/json');
            echo json_encode(["error" => "Invalid or expired token"]);
            exit;
        }
        return [
            'id' => (int)$user['id'],
            'nome' => $user['nome'] ?? '',
            'email' => $user['email'] ?? '',
            'tipo' => $user['tipo'] ?? 'cliente'
        ];
    }

    private function getBearerToken(): ?string
    {
        $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if (stripos($header, 'Bearer ') === 0) {
            return trim(substr($header, 7));
        }
        $token = $_GET['token'] ?? ($_POST['token'] ?? null);
        return $token ?: null;
    }
}


