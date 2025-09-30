# Configuração do Supabase

## Arquivo .env

Crie um arquivo `.env` na pasta `backend` com as seguintes configurações:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Database Configuration (legacy - will be replaced by Supabase)
DB_HOST=localhost
DB_NAME=quickmarket
DB_USER=root
DB_PASS=
DB_CHARSET=utf8mb4
```

## Como obter as chaves do Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta ou faça login
3. Crie um novo projeto
4. Vá para Settings > API
5. Copie:
   - **Project URL** → `SUPABASE_URL`
   - **anon public** → `SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY`

## Estrutura do Banco de Dados

O Supabase usa PostgreSQL. Você precisará criar as seguintes tabelas no seu projeto Supabase:

### Tabelas principais:
- `usuarios`
- `mercados`
- `menus`
- `produtos`
- `pedidos`
- `carrinho_usuario`
- `pagamentos`
- `avaliacoes`
- `cupons`
- `promocoes`
- `formas_pagamento`
- `formas_pagamento_mercado`

## Migração de Dados

1. Exporte os dados do seu banco MySQL atual
2. Converta para formato PostgreSQL
3. Importe no Supabase usando o SQL Editor ou pgAdmin

## Funções RPC (Opcional)

Para queries SQL complexas, você pode criar funções RPC no Supabase:

```sql
-- Exemplo de função RPC para queries complexas
CREATE OR REPLACE FUNCTION execute_sql(sql_text text, params jsonb DEFAULT '[]'::jsonb)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Implementar execução de SQL dinâmico
  RETURN '[]'::jsonb;
END;
$$;
```

## Testando a Conexão

Após configurar, teste a conexão executando:

```bash
php -r "
require_once 'vendor/autoload.php';
try {
    \$db = new App\Database\Database();
    echo 'Conexão com Supabase estabelecida com sucesso!';
} catch (Exception \$e) {
    echo 'Erro: ' . \$e->getMessage();
}
"
```

