CREATE DATABASE operacional_db;

CREATE TABLE IF NOT EXISTS conteiner(
  id_conteiner serial NOT NULL PRIMARY KEY,
  cliente varchar(100) NOT NULL,
  num_conteiner varchar(11) NOT NULL UNIQUE,
  tipo_conteiner int NOT NULL,
  status_conteiner text NOT NULL,
  categoria text NOT NULL
);

CREATE TABLE IF NOT EXISTS movimentacoes(
  id_movimentacao serial NOT NULL PRIMARY KEY,
  tipo_movimentacao varchar(20) NOT NULL,
  movimentacao_inicio date NOT NULL,
  movimentacao_fim date NOT NULL
);

CREATE TABLE IF NOT EXISTS relatorios(
	id_relatorio serial PRIMARY KEY,
  sumario text 
);