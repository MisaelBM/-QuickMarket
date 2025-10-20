-- No PostgreSQL, a criação e exclusão de bancos de dados geralmente são feitas fora do script.
-- Você pode usar os seguintes comandos no seu terminal psql:
--
-- DROP DATABASE IF EXISTS quickmarket;
-- CREATE DATABASE quickmarket;
--
-- E para se conectar ao banco de dados criado:
-- \c quickmarket

-- -----------------------------------------------------
-- DEFINIÇÃO DOS TIPOS ENUMERADOS (ENUM)
-- -----------------------------------------------------
CREATE TYPE tipo_usuario AS ENUM('cliente', 'admin');
CREATE TYPE status_mercado AS ENUM('aberto', 'fechado', 'manutencao');
CREATE TYPE status_pedido AS ENUM('pendente', 'confirmado', 'preparo', 'enviado', 'entregue', 'cancelado');
CREATE TYPE status_pagamento AS ENUM('pago', 'pendente', 'falhou', 'reembolsado');
CREATE TYPE status_entrega AS ENUM('agendado', 'coletado', 'em_rota', 'entregue', 'problema');
CREATE TYPE tipo_entidade_contato AS ENUM('usuario', 'mercado', 'representante');
CREATE TYPE tipo_contato AS ENUM('email', 'telefone');
CREATE TYPE tipo_entidade_imagem AS ENUM('mercado', 'produto', 'promocao');
CREATE TYPE tipo_notificacao AS ENUM('pedido', 'promocao', 'aviso');

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
-- Table `mercados`
-- -----------------------------------------------------
CREATE TABLE mercados (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    descricao TEXT,
    cnpj VARCHAR(20) UNIQUE NOT NULL,
    categoria_principal VARCHAR(100),
    tempo_medio_preparo INT,
    taxa_entrega NUMERIC(10,2) DEFAULT 0,
    status status_mercado DEFAULT 'aberto',
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `representantes_legais`
-- -----------------------------------------------------
CREATE TABLE representantes_legais (
    id SERIAL PRIMARY KEY,
    mercado_id INT UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    data_nascimento DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `promocoes`
-- -----------------------------------------------------
CREATE TABLE promocoes (
    id SERIAL PRIMARY KEY,
    mercado_id INT,
    produto_id INT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    desconto_percentual NUMERIC(5,2),
    desconto_valor NUMERIC(10,2),
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    limite_uso INT DEFAULT 1,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `endereco_mercado`
-- -----------------------------------------------------
CREATE TABLE endereco_mercado (
    id SERIAL PRIMARY KEY,
    mercado_id INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(20),
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    latitude NUMERIC(10,8),
    longitude NUMERIC(11,8),
    principal BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `menus`
-- -----------------------------------------------------
CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    mercado_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `categorias_menu`
-- -----------------------------------------------------
CREATE TABLE categorias_menu (
    id SERIAL PRIMARY KEY,
    menu_id INT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    ordem INT DEFAULT 0
);

-- -----------------------------------------------------
-- Table `produtos`
-- -----------------------------------------------------
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    menu_id INT NOT NULL,
    categoria_id INT,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10,2) NOT NULL,
    tempo_preparo INT,
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
    mercado_id INT NOT NULL,
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
-- Table `formas_pagamento`
-- -----------------------------------------------------
CREATE TABLE formas_pagamento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    codigo VARCHAR(20) UNIQUE,
    ativo BOOLEAN DEFAULT TRUE
);

-- -----------------------------------------------------
-- Table `formas_pagamento_mercado` (Join Table)
-- -----------------------------------------------------
CREATE TABLE formas_pagamento_mercado (
    id SERIAL PRIMARY KEY,
    mercado_id INT NOT NULL,
    forma_pagamento_id INT NOT NULL,
    CONSTRAINT unique_mercado_forma UNIQUE (mercado_id, forma_pagamento_id)
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
    mercado_id INT NOT NULL,
    nota_estrelas INT CHECK (nota_estrelas BETWEEN 1 AND 5),
    comentario TEXT,
    nota_entrega INT CHECK (nota_entrega BETWEEN 1 AND 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `contatos` (Polymorphic)
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
-- Table `imagens` (Polymorphic)
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
-- Table `cupons`
-- -----------------------------------------------------
CREATE TABLE cupons (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    desconto_percentual NUMERIC(5,2),
    desconto_valor NUMERIC(10,2),
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    limite_uso_total INT,
    uso_atual INT DEFAULT 0,
    minimo_pedido NUMERIC(10,2),
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------
-- Table `cupons_usuario` (Join Table)
-- -----------------------------------------------------
CREATE TABLE cupons_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    cupom_id INT NOT NULL,
    usos_restantes INT DEFAULT 1,
    CONSTRAINT unique_user_cupom UNIQUE (usuario_id, cupom_id)
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
BEFORE UPDATE ON mercados
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
ALTER TABLE representantes_legais ADD CONSTRAINT fk_representantes_legais_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id) ON DELETE CASCADE;
ALTER TABLE endereco_mercado ADD CONSTRAINT fk_endereco_mercado_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id) ON DELETE CASCADE;
ALTER TABLE formas_pagamento_mercado ADD CONSTRAINT fk_formas_pagamento_mercado_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id) ON DELETE CASCADE;
ALTER TABLE formas_pagamento_mercado ADD CONSTRAINT fk_formas_pagamento_mercado_formas_pagamento FOREIGN KEY (forma_pagamento_id) REFERENCES formas_pagamento(id) ON DELETE CASCADE;
ALTER TABLE menus ADD CONSTRAINT fk_menus_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id) ON DELETE CASCADE;
ALTER TABLE categorias_menu ADD CONSTRAINT fk_categorias_menu_menus FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE SET NULL;
ALTER TABLE produtos ADD CONSTRAINT fk_produtos_menus FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE;
ALTER TABLE produtos ADD CONSTRAINT fk_produtos_categorias_menu FOREIGN KEY (categoria_id) REFERENCES categorias_menu(id);
ALTER TABLE promocoes ADD CONSTRAINT fk_promocoes_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id);
ALTER TABLE promocoes ADD CONSTRAINT fk_promocoes_produtos FOREIGN KEY (produto_id) REFERENCES produtos(id);
ALTER TABLE pedidos ADD CONSTRAINT fk_pedidos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE RESTRICT;
ALTER TABLE pedidos ADD CONSTRAINT fk_pedidos_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id) ON DELETE RESTRICT;
ALTER TABLE itens_pedido ADD CONSTRAINT fk_itens_pedido_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE itens_pedido ADD CONSTRAINT fk_itens_pedido_produtos FOREIGN KEY (produto_id) REFERENCES produtos(id);
ALTER TABLE enderecos_entrega ADD CONSTRAINT fk_enderecos_entrega_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE enderecos_entrega ADD CONSTRAINT fk_enderecos_entrega_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
ALTER TABLE pagamentos ADD CONSTRAINT fk_pagamentos_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE pagamentos ADD CONSTRAINT fk_pagamentos_formas_pagamento FOREIGN KEY (forma_pagamento_id) REFERENCES formas_pagamento(id);
ALTER TABLE entregas ADD CONSTRAINT fk_entregas_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE entregas ADD CONSTRAINT fk_entregas_usuarios FOREIGN KEY (entregador_id) REFERENCES usuarios(id);
ALTER TABLE avaliacoes ADD CONSTRAINT fk_avaliacoes_pedidos FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;
ALTER TABLE avaliacoes ADD CONSTRAINT fk_avaliacoes_mercados FOREIGN KEY (mercado_id) REFERENCES mercados(id);
ALTER TABLE cupons_usuario ADD CONSTRAINT fk_cupons_usuario_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;
ALTER TABLE cupons_usuario ADD CONSTRAINT fk_cupons_usuario_cupons FOREIGN KEY (cupom_id) REFERENCES cupons(id) ON DELETE CASCADE;
ALTER TABLE notificacoes ADD CONSTRAINT fk_notificacoes_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;