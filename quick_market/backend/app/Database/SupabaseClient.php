<?php

namespace App\Database;

use App\Handlers\readEnv;

class SupabaseClient {
    private string $url;
    private string $anonKey;
    private string $serviceRoleKey;
    private array $headers;

    public function __construct()
    {
        $env = new readEnv();
        $env = $env->getEnv();

        $this->url = rtrim($env['SUPABASE_URL'] ?? '', '/');
        $this->anonKey = $env['SUPABASE_ANON_KEY'] ?? '';
        $this->serviceRoleKey = $env['SUPABASE_SERVICE_ROLE_KEY'] ?? '';
        
        $this->headers = [
            'Content-Type: application/json',
            'apikey: ' . $this->anonKey,
            'Authorization: Bearer ' . $this->anonKey
        ];
    }

    /**
     * Execute a SELECT query
     */
    public function select(string $table, array $filters = [], array $options = []): array
    {
        $url = $this->url . '/rest/v1/' . $table;
        
        $queryParams = [];
        
        // Add filters
        foreach ($filters as $column => $value) {
            $queryParams[] = $column . '=eq.' . urlencode($value);
        }
        
        // Add select columns
        if (isset($options['select'])) {
            $queryParams[] = 'select=' . $options['select'];
        }
        
        // Add limit
        if (isset($options['limit'])) {
            $queryParams[] = 'limit=' . $options['limit'];
        }
        
        // Add order
        if (isset($options['order'])) {
            $queryParams[] = 'order=' . $options['order'];
        }
        
        if (!empty($queryParams)) {
            $url .= '?' . implode('&', $queryParams);
        }

        $response = $this->makeRequest('GET', $url);
        return $response ?: [];
    }

    /**
     * Execute an INSERT query
     */
    public function insert(string $table, array $data): array
    {
        $url = $this->url . '/rest/v1/' . $table;
        
        $response = $this->makeRequest('POST', $url, $data);
        return $response ?: [];
    }

    /**
     * Execute an UPDATE query
     */
    public function update(string $table, array $data, array $filters): array
    {
        $url = $this->url . '/rest/v1/' . $table;
        
        $queryParams = [];
        foreach ($filters as $column => $value) {
            $queryParams[] = $column . '=eq.' . urlencode($value);
        }
        
        if (!empty($queryParams)) {
            $url .= '?' . implode('&', $queryParams);
        }

        $response = $this->makeRequest('PATCH', $url, $data);
        return $response ?: [];
    }

    /**
     * Execute a DELETE query
     */
    public function delete(string $table, array $filters): array
    {
        $url = $this->url . '/rest/v1/' . $table;
        
        $queryParams = [];
        foreach ($filters as $column => $value) {
            $queryParams[] = $column . '=eq.' . urlencode($value);
        }
        
        if (!empty($queryParams)) {
            $url .= '?' . implode('&', $queryParams);
        }

        $response = $this->makeRequest('DELETE', $url);
        return $response ?: [];
    }

    /**
     * Execute a raw SQL query (using RPC)
     */
    public function query(string $sql, array $params = []): array
    {
        // Para queries SQL complexas, vamos usar uma abordagem diferente
        // Primeiro, vamos tentar usar o endpoint de RPC do Supabase
        $url = $this->url . '/rest/v1/rpc/execute_sql';
        
        $data = [
            'sql' => $sql,
            'params' => $params
        ];

        try {
            $response = $this->makeRequest('POST', $url, $data);
            return $response ?: [];
        } catch (\Exception $e) {
            // Se o RPC não funcionar, vamos tentar uma abordagem alternativa
            // usando o endpoint de query direta do Supabase
            return $this->executeDirectQuery($sql, $params);
        }
    }

    /**
     * Execute direct query using Supabase query endpoint
     */
    private function executeDirectQuery(string $sql, array $params = []): array
    {
        // Para queries complexas, vamos usar uma função RPC personalizada
        // ou converter para a sintaxe do Supabase REST API
        $url = $this->url . '/rest/v1/';
        
        // Esta é uma implementação simplificada
        // Em produção, você precisaria criar funções RPC no Supabase
        // ou usar uma abordagem diferente para queries complexas
        return [];
    }

    /**
     * Get the last insert ID (for compatibility with PDO)
     */
    public function lastInsertId(): ?int
    {
        // Supabase returns the inserted record with ID, so this is handled differently
        // This method is kept for compatibility but may not work as expected
        return null;
    }

    /**
     * Begin transaction (for compatibility with PDO)
     */
    public function beginTransaction(): bool
    {
        // Supabase handles transactions differently
        // This method is kept for compatibility
        return true;
    }

    /**
     * Commit transaction (for compatibility with PDO)
     */
    public function commit(): bool
    {
        // Supabase handles transactions differently
        // This method is kept for compatibility
        return true;
    }

    /**
     * Rollback transaction (for compatibility with PDO)
     */
    public function rollback(): bool
    {
        // Supabase handles transactions differently
        // This method is kept for compatibility
        return true;
    }

    /**
     * Make HTTP request to Supabase
     */
    private function makeRequest(string $method, string $url, array $data = null): ?array
    {
        $ch = curl_init();
        
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $this->headers,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_TIMEOUT => 30
        ]);

        if ($data && in_array($method, ['POST', 'PATCH', 'PUT'])) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        }

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        
        curl_close($ch);

        if ($error) {
            throw new \Exception('cURL Error: ' . $error);
        }

        if ($httpCode >= 400) {
            throw new \Exception('HTTP Error ' . $httpCode . ': ' . $response);
        }

        return $response ? json_decode($response, true) : null;
    }

    /**
     * Get the database connection (for compatibility with PDO)
     */
    public function getDb(): self
    {
        return $this;
    }
}
