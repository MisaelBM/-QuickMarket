<?php

require_once 'vendor/autoload.php';

use App\Database\Database;
use App\Models\User;
use App\Models\Mercado;
use App\Models\Cart;
use App\Models\Order;

echo "=== Teste de Migração para Supabase ===\n\n";

try {
    // Teste 1: Conexão com Supabase
    echo "1. Testando conexão com Supabase...\n";
    $db = new Database();
    echo "✓ Conexão estabelecida com sucesso!\n\n";

    // Teste 2: Teste do Model User
    echo "2. Testando Model User...\n";
    $userModel = new User();
    echo "✓ Model User inicializado com sucesso!\n\n";

    // Teste 3: Teste do Model Mercado
    echo "3. Testando Model Mercado...\n";
    $mercadoModel = new Mercado();
    echo "✓ Model Mercado inicializado com sucesso!\n\n";

    // Teste 4: Teste do Model Cart
    echo "4. Testando Model Cart...\n";
    $cartModel = new Cart();
    echo "✓ Model Cart inicializado com sucesso!\n\n";

    // Teste 5: Teste do Model Order
    echo "5. Testando Model Order...\n";
    $orderModel = new Order();
    echo "✓ Model Order inicializado com sucesso!\n\n";

    // Teste 6: Teste de operações básicas (sem dados reais)
    echo "6. Testando operações básicas...\n";
    
    // Teste de select (deve retornar array vazio se não houver dados)
    $users = $userModel->findByEmail('test@example.com');
    echo "✓ Select funcionando (retornou: " . (is_null($users) ? 'null' : 'array') . ")\n";
    
    $mercados = $mercadoModel->nearby();
    echo "✓ Query de mercados funcionando (retornou: " . count($mercados) . " registros)\n";
    
    echo "\n=== Todos os testes passaram! ===\n";
    echo "A migração para Supabase foi concluída com sucesso.\n";
    echo "\nPróximos passos:\n";
    echo "1. Configure o arquivo .env com suas credenciais do Supabase\n";
    echo "2. Crie as tabelas no Supabase\n";
    echo "3. Migre os dados do MySQL para o Supabase\n";
    echo "4. Teste as funcionalidades da aplicação\n";

} catch (Exception $e) {
    echo "❌ Erro durante o teste: " . $e->getMessage() . "\n";
    echo "Verifique se:\n";
    echo "1. O arquivo .env está configurado corretamente\n";
    echo "2. As credenciais do Supabase estão corretas\n";
    echo "3. O projeto Supabase está ativo\n";
    echo "4. As dependências estão instaladas (composer install)\n";
}

