const express = require('express');
const conteiners = require('./controladores/conteiners');
const movimentacoes = require('./controladores/movimentacoes')
const relatorio = require('./controladores/relatorio')
const verificarConteiner = require('./intermediarios/verificarConteiner');
const rotas = express();

//rotas conteinters
rotas.post('/conteiners', verificarConteiner ,conteiners.cadastrarConteiner);
rotas.get('/conteiners', conteiners.listarConteiners);
rotas.get('/conteiners/:id', conteiners.obterConteiner);
rotas.put('/conteiner/:id', conteiners.atualizarConteiner);
rotas.delete('/conteiner/:id', conteiners.deletarConteiner);

//rotas de movimentação
rotas.post('/conteiner/:id/movimentacao', movimentacoes.criarMovimentacao);
rotas.get('/conteiner/:id/movimentacao', movimentacoes.listarMovimentacao)
rotas.delete('/conteiner/:id/:id_movimentacao', movimentacoes.deletarMovimentacao)

//rotas do relatório
rotas.get('/relatorio/:id_cliente', relatorio.listarMovimentacoesCliente)
rotas.get('/relatorio/:tipo', relatorio.listarMovimentacoesTipo)

module.exports = {
    rotas
}