<?php

require_once 'vendor/autoload.php';

use App\Database\Seeders\DatabaseSeeder;

echo "=== Teste dos Seeders com Supabase ===\n\n";

try {
    // Teste 1: Conexão com Supabase
    echo "1. Testando conexão com Supabase...\n";
    $seeder = new DatabaseSeeder();
    echo "✓ Conexão estabelecida com sucesso!\n\n";

    // Teste 2: Teste de seeders individuais
    echo "2. Testando Seeders individuais...\n";
    
    // Teste FormasPagamentoSeeder
    echo "   - FormasPagamentoSeeder...\n";
    (new \App\Database\Seeders\FormasPagamentoSeeder())->run();
    echo "   ✓ FormasPagamentoSeeder executado com sucesso!\n";
    
    // Teste UsuariosSeeder
    echo "   - UsuariosSeeder...\n";
    (new \App\Database\Seeders\UsuariosSeeder())->run();
    echo "   ✓ UsuariosSeeder executado com sucesso!\n";
    
    // Teste MercadosSeeder
    echo "   - MercadosSeeder...\n";
    (new \App\Database\Seeders\MercadosSeeder())->run();
    echo "   ✓ MercadosSeeder executado com sucesso!\n";
    
    // Teste MenusSeeder
    echo "   - MenusSeeder...\n";
    (new \App\Database\Seeders\MenusSeeder())->run();
    echo "   ✓ MenusSeeder executado com sucesso!\n";
    
    // Teste CategoriasMenuSeeder
    echo "   - CategoriasMenuSeeder...\n";
    (new \App\Database\Seeders\CategoriasMenuSeeder())->run();
    echo "   ✓ CategoriasMenuSeeder executado com sucesso!\n";
    
    // Teste ProdutosSeeder
    echo "   - ProdutosSeeder...\n";
    (new \App\Database\Seeders\ProdutosSeeder())->run();
    echo "   ✓ ProdutosSeeder executado com sucesso!\n";
    
    echo "\n=== Todos os testes passaram! ===\n";
    echo "Os Seeders foram migrados com sucesso para Supabase.\n";
    echo "\nPróximos passos:\n";
    echo "1. Configure o arquivo .env com suas credenciais do Supabase\n";
    echo "2. Crie as tabelas no Supabase\n";
    echo "3. Execute o DatabaseSeeder completo: php scripts/seed.php\n";
    echo "4. Verifique os dados no Supabase Dashboard\n";

} catch (Exception $e) {
    echo "❌ Erro durante o teste: " . $e->getMessage() . "\n";
    echo "Verifique se:\n";
    echo "1. O arquivo .env está configurado corretamente\n";
    echo "2. As credenciais do Supabase estão corretas\n";
    echo "3. O projeto Supabase está ativo\n";
    echo "4. As dependências estão instaladas (composer install)\n";
    echo "5. As tabelas foram criadas no Supabase\n";
}

