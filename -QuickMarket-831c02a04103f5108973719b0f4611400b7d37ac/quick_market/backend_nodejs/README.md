# QuickMarket - Backend Node.js

Backend Node.js com Express para o QuickMarket - Supermercado Online, integrado ao Supabase.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Supabase** - Banco de dados PostgreSQL
- **bcryptjs** - Hash de senhas
- **jsonwebtoken** - Autenticação JWT
- **cors** - Controle de acesso CORS

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- Conta no Supabase
- Banco de dados configurado (sql.sql)

## ⚙️ Instalação

### 1. Instalar dependências

```bash
cd -QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/backend_nodejs
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_key

# Server Configuration
PORT=3001
NODE_ENV=development

# JWT Secret
JWT_SECRET=your_secret_jwt_key_minimum_32_characters

# CORS
FRONTEND_URL=http://localhost:3000
```

### 3. Executar o servidor

**Desenvolvimento (com nodemon):**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

O servidor estará rodando em: `http://localhost:3001`

## 📚 Endpoints da API

### Autenticação

- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login
- `POST /api/auth/verify` - Verificar token

### Produtos

- `GET /api/products` - Listar todos os produtos (com paginação e busca)
- `GET /api/products/:id` - Obter produto específico
- `GET /api/products/category/:categoryId` - Produtos por categoria
- `GET /api/products/featured/list` - Produtos em destaque

### Categorias

- `GET /api/categories` - Listar todas as categorias
- `GET /api/categories/:id` - Obter categoria específica
- `GET /api/categories/:id/products` - Produtos de uma categoria

### Carrinho

- `GET /api/cart` - Obter carrinho do usuário (requer autenticação)
- `POST /api/cart` - Adicionar item ao carrinho (requer autenticação)
- `PUT /api/cart/:id` - Atualizar item do carrinho (requer autenticação)
- `DELETE /api/cart/:id` - Remover item do carrinho (requer autenticação)
- `DELETE /api/cart` - Limpar carrinho (requer autenticação)

### Pedidos

- `GET /api/orders` - Listar pedidos do usuário (requer autenticação)
- `GET /api/orders/:id` - Obter pedido específico (requer autenticação)
- `POST /api/orders` - Criar novo pedido (requer autenticação)
- `PUT /api/orders/:id/status` - Atualizar status do pedido (requer autenticação)

### Usuário

- `GET /api/user` - Obter dados do usuário (requer autenticação)
- `PUT /api/user` - Atualizar dados do usuário (requer autenticação)
- `GET /api/user/addresses` - Obter endereços (requer autenticação)
- `POST /api/user/addresses` - Adicionar endereço (requer autenticação)
- `PUT /api/user/addresses/:id` - Atualizar endereço (requer autenticação)
- `DELETE /api/user/addresses/:id` - Remover endereço (requer autenticação)

### Health Check

- `GET /api/health` - Status da API

## 🔐 Autenticação

A API usa JWT (JSON Web Tokens) para autenticação. Após o login, o token deve ser enviado no header:

```
Authorization: Bearer <token>
```

## 📝 Exemplos de Uso

### Registrar usuário

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "senha123"
  }'
```

### Login

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@email.com",
    "senha": "senha123"
  }'
```

### Obter produtos

```bash
curl http://localhost:3001/api/products
```

### Adicionar ao carrinho

```bash
curl -X POST http://localhost:3001/api/cart \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "produto_id": 1,
    "quantidade": 2
  }'
```

## 🔧 Estrutura do Projeto

```
backend_nodejs/
├── config/
│   └── supabase.js          # Configuração do Supabase
├── middleware/
│   └── auth.js               # Middleware de autenticação
├── routes/
│   ├── auth.js              # Rotas de autenticação
│   ├── products.js          # Rotas de produtos
│   ├── categories.js         # Rotas de categorias
│   ├── cart.js               # Rotas do carrinho
│   ├── orders.js             # Rotas de pedidos
│   └── user.js               # Rotas do usuário
├── .env                      # Variáveis de ambiente
├── package.json             # Dependências
├── server.js                # Servidor principal
└── README.md                # Documentação
```

## 🐛 Troubleshooting

### Erro ao conectar ao Supabase

Verifique se as credenciais no arquivo `.env` estão corretas.

### Porta já em uso

Altere a porta no arquivo `.env` ou use outra porta:
```bash
PORT=3002 npm run dev
```

### Erro de CORS

Certifique-se de que o `FRONTEND_URL` no `.env` está correto.

## 📝 Notas

- O banco de dados já deve estar configurado no Supabase
- Execute o script `sql.sql` no Supabase antes de usar a API
- Em produção, use variáveis de ambiente seguras



