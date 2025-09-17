<?php

namespace App\Controllers;

use App\Request;
use App\Models\User;
use App\Database\SessionRepository;

class AuthController {
    private Request $request;
    private User $users;
    private SessionRepository $sessions;

    public function __construct()
    {
        $this->request = new Request();
        $this->users = new User();
        $this->sessions = new SessionRepository();
    }

    // Login de Usuário + Verificação no "banco" (JSON)
    public function login()
    {
        $data = $this->request->getJson();
        $email = trim($data['email'] ?? '');
        $password = (string)($data['password'] ?? '');

        $user = $this->users->findByEmail($email);
        if (!$user) {
            return $this->request->json(["error" => "Credenciais inválidas"], 401);
        }
        $ok = password_verify($password, $user['senha_hash'] ?? '');
        if (!$ok) {
            return $this->request->json(["error" => "Credenciais inválidas"], 401);
        }

        $token = $this->sessions->createToken((int)$user['id'], $_SERVER['HTTP_USER_AGENT'] ?? null, $_SERVER['REMOTE_ADDR'] ?? null);
        $safeUser = [
            'id' => (int)$user['id'],
            'nome' => $user['nome'] ?? '',
            'email' => $user['email'] ?? '',
            'tipo' => $user['tipo'] ?? 'cliente'
        ];

        return $this->request->json(["message" => "Logged in", "token" => $token, "user" => $safeUser]);
    }

    public function me()
    {
        $user = $this->request->requireAuth();
        return $this->request->json(["authenticated" => true, "user" => $user]);
    }

    public function logout()
    {
        $token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if (stripos($token, 'Bearer ') === 0) {
            $token = trim(substr($token, 7));
            $this->sessions->revokeToken($token);
        }
        return $this->request->json(["message" => "Logged out"]);
    }
}


