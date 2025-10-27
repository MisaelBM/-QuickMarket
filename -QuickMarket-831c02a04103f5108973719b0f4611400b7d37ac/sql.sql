-- No PostgreSQL, a criação e exclusão de bancos de dados geralmente são feitas fora do script.
-- Você pode usar os seguintes comandos no seu terminal psql:
--
-- DROP DATABASE IF EXISTS quickmarket_single;
-- CREATE DATABASE quickmarket_single;
--
-- E para se conectar ao banco de dados criado:
-- \c quickmarket_single

-- -----------------------------------------------------
-- DEFINIÇÃO DOS TIPOS ENUMERADOS (ENUM)
-- -----------------------------------------------------
CREATE TYPE tipo_usuario AS ENUM('cliente', 'admin');
CREATE TYPE status_pedido AS ENUM('pendente', 'confirmado', 'preparo', 'enviado', 'entregue', 'cancelado');
CREATE TYPE status_pagamento AS ENUM('pago', 'pendente', 'falhou', 'reembolsado');
CREATE TYPE status_entrega AS ENUM('agendado', 'coletado', 'em_rota', 'entregue', 'problema');
CREATE TYPE tipo_entidade_contato AS ENUM('usuario');
CREATE TYPE tipo_contato AS ENUM('email', 'telefone');
CREATE TYPE tipo_entidade_imagem AS ENUM('produto');
CREATE TYPE tipo_notificacao AS ENUM('pedido', 'aviso');

-- -----------------------------------------------------
-- FUNÇÃO DE TRIGGER PARA ATUALIZAR O CAMPO updated_at
-- -----------------------------------------------------
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------
-- Table `usuarios`
-- -----------------------------------------------------
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    tipo tipo_usuario DEFAULT 'cliente',
    data_nascimento DATE,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `endereco_usuario`
-- -----------------------------------------------------
CREATE TABLE endereco_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(20),
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    pais VARCHAR(50) DEFAULT 'Brasil',
    latitude NUMERIC(10,8),
    longitude NUMERIC(11,8),
    principal BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `sessao_usuario`
-- -----------------------------------------------------
CREATE TABLE sessao_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    expiracao TIMESTAMPTZ NOT NULL,
    dispositivo VARCHAR(100),
    ip_address VARCHAR(45),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `menus` (Agora são as categorias principais da loja)
-- -----------------------------------------------------
CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `produtos`
-- -----------------------------------------------------
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    menu_id INT NOT NULL, -- FK para 'menus' (categorias)
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10,2) NOT NULL,
    -- tempo_preparo REMOVIDO
    disponivel BOOLEAN DEFAULT TRUE,
    imagem_url VARCHAR(500),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `carrinho_usuario`
-- -----------------------------------------------------
CREATE TABLE carrinho_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT DEFAULT 1,
    observacoes TEXT,
    preco_unitario NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) GENERATED ALWAYS AS (quantidade * preco_unitario) STORED,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `pedidos`
-- -----------------------------------------------------
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    numero_pedido VARCHAR(50) UNIQUE NOT NULL,
    status status_pedido DEFAULT 'pendente',
    total NUMERIC(10,2) NOT NULL,
    frete NUMERIC(10,2) DEFAULT 0,
    desconto_aplicado NUMERIC(10,2) DEFAULT 0,
    observacoes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `itens_pedido`
-- -----------------------------------------------------
CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) GENERATED ALWAYS AS (quantidade * preco_unitario) STORED,
    customizacoes JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `formas_pagamento` (Lista de formas que a loja aceita)
-- -----------------------------------------------------
CREATE TABLE formas_pagamento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    codigo VARCHAR(20) UNIQUE,
    ativo BOOLEAN DEFAULT TRUE
);

-- -----------------------------------------------------
-- Table `pagamentos`
-- -----------------------------------------------------
CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,
    pedido_id INT NOT NULL,
    forma_pagamento_id INT NOT NULL,
    valor NUMERIC(10,2) NOT NULL,
    status status_pagamento DEFAULT 'pendente',
    transacao_id VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `entregas`
-- -----------------------------------------------------
CREATE TABLE entregas (
    id SERIAL PRIMARY KEY,
    pedido_id INT NOT NULL,
    status status_entrega DEFAULT 'agendado',
    tempo_estimado INT,
    latitude_atual NUMERIC(10,8),
    longitude_atual NUMERIC(11,8),
    entregador_id INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `enderecos_entrega`
-- -----------------------------------------------------
CREATE TABLE enderecos_entrega (
    id SERIAL PRIMARY KEY,
    pedido_id INT NOT NULL,
    usuario_id INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(20),
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    pais VARCHAR(50) DEFAULT 'Brasil',
    latitude NUMERIC(10,8),
    longitude NUMERIC(11,8),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `avaliacoes`
-- -----------------------------------------------------
CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    pedido_id INT NOT NULL,
    nota_estrelas INT CHECK (nota_estrelas BETWEEN 1 AND 5),
    comentario TEXT,
    nota_entrega INT CHECK (nota_entrega BETWEEN 1 AND 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `contatos` (Polymorphic - Apenas para usuários)
-- -----------------------------------------------------
CREATE TABLE contatos (
    id SERIAL PRIMARY KEY,
    entidade_id INT NOT NULL,
    tipo_entidade tipo_entidade_contato NOT NULL,
    tipo_contato tipo_contato NOT NULL,
    valor VARCHAR(255) NOT NULL,
    principal BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `imagens` (Polymorphic - Apenas para produtos)
-- -----------------------------------------------------
CREATE TABLE imagens (
    id SERIAL PRIMARY KEY,
    entidade_id INT NOT NULL,
    tipo_entidade tipo_entidade_imagem NOT NULL,
    url VARCHAR(500) NOT NULL,
    legenda VARCHAR(255),
    ordem INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `notificacoes`
-- -----------------------------------------------------
CREATE TABLE notificacoes (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    mensagem TEXT NOT NULL,
    tipo tipo_notificacao DEFAULT 'aviso',
    lida BOOLEAN DEFAULT FALSE,
    data_envio TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- CRIAÇÃO DOS ÍNDICES
-- -----------------------------------------------------
CREATE INDEX idx_entidade_tipo ON contatos(entidade_id, tipo_entidade);

-- -----------------------------------------------------
-- CRIAÇÃO DOS GATILHOS (TRIGGERS) PARA O CAMPO updated_at
-- -----------------------------------------------------
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON usuarios
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON carrinho_usuario
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON pedidos
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON entregas
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- -----------------------------------------------------
-- ADICIONANDO AS CONSTRAINTS FOREIGN KEY
-- -----------------------------------------------------
ALTER TABLE endereco_usuario ADD CONSTRAINT fk_endereco_usuario_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;
ALTER TABLE carrinho_usuario ADD CONSTRAINT fk_carrinho_usuario_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;
ALTER TABLE carrinho_usuario ADD CONSTRAINT fk_carrinho_usuario_produtos FOREIGN KEY (produto_id) REFERENCES produtos(id);
ALTER TABLE sessao_usuario ADD CONSTRAINT fk_sessao_usuario_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;

ALTER TABLE produtos ADD CONSTRAINT fk_produtos_menus FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE;

ALTER TABLE pedidos ADD CONSTRAINT fk_pedidos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE RESTRICT;

ALTER TABLE itens_pedido ADD CONSTRAINT fk_itens_pedido_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE itens_pedido ADD CONSTRAINT fk_itens_pedido_produtos FOREIGN KEY (produto_id) REFERENCES produtos(id);
ALTER TABLE enderecos_entrega ADD CONSTRAINT fk_enderecos_entrega_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE enderecos_entrega ADD CONSTRAINT fk_enderecos_entrega_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
ALTER TABLE pagamentos ADD CONSTRAINT fk_pagamentos_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE pagamentos ADD CONSTRAINT fk_pagamentos_formas_pagamento FOREIGN KEY (forma_pagamento_id) REFERENCES formas_pagamento(id);
ALTER TABLE entregas ADD CONSTRAINT fk_entregas_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE entregas ADD CONSTRAINT fk_entregas_usuarios FOREIGN KEY (entregador_id) REFERENCES usuarios(id);
ALTER TABLE avaliacoes ADD CONSTRAINT fk_avaliacoes_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE notificacoes ADD CONSTRAINT fk_notificacoes_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;