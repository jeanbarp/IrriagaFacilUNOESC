CREATE DATABASE irriga_facil;

CREATE TABLE usuario (
    id serial PRIMARY KEY,
    nome varchar(50) NOT NULL,
    senha varchar(50) NOT NULL
);

CREATE TABLE propriedade (
    id serial PRIMARY KEY,
    nome varchar(50) NOT NULL,
    coordenadas varchar(150) NOT NULL,
    usuario_id int NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE propriedade_cultivo (
    id serial PRIMARY KEY,
    umidade_minima numeric NOT NULL,
    propriedade_id int NOT NULL,
    produto_id int NOT NULL,
    solo_id int NOT NULL,
    irrigacao_id int NOT NULL,
    FOREIGN KEY (propriedade_id) REFERENCES propriedade(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id),
    FOREIGN KEY (solo_id) REFERENCES solo(id),
    FOREIGN KEY (irrigacao_id) REFERENCES irrigacao(id)
);

CREATE TABLE solo (
    id serial PRIMARY KEY,
    tipo varchar(50) NOT NULL
);

CREATE TABLE irrigacao (
    id serial PRIMARY KEY,
    tipo varchar(50) NOT NULL
);

CREATE TABLE umidade_registro (
    id serial PRIMARY KEY,
    valor numeric NOT NULL,
    data_leitura timestamp NOT NULL,
    propriedade_cultivo_id int NOT NULL,
    FOREIGN KEY (propriedade_cultivo_id) REFERENCES propriedade_cultivo(id)
);

CREATE TABLE produto (
    id serial PRIMARY KEY,
    nome varchar(50) NOT NULL,
    imagem varchar(50) NOT NULL
);

CREATE TABLE notificacao (
    id serial PRIMARY KEY,
    titulo varchar(50) NOT NULL,
    conteudo varchar(150) NOT NULL,
    lida_em timestamp,
    propriedade_cultivo_id int,
    usuario_id int NOT NULL,
    FOREIGN KEY (propriedade_cultivo_id) REFERENCES propriedade_cultivo(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
