const knex = require('knex')

const criarMovimentacao = async (req, res) => {
    const { tipo_movimentacao } = req.body;
    const { id } = req.params

    try {
        const dataInicial = new Date();
        const dataFinal = new Date();

        const movimentacao_conteiner = await knex('movimentacoes').insert({
            id_conteiner,
            tipo_movimentacao,
            movimentacao_inicio: dataInicial,
            movimentacao_fim: dataFinal
        })
        .where({id})

        return res.status(200).json({ "mensagem": "Movimentação cadastrada com sucesso!"})
    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
        
    }

}

const listarMovimentacao = async (req, res) => {
    const { id_movimentacao } = req.params

    try {
        const movimentacao = await knex('movimentacoes')
        .where({id})

        return res.status(200).json(movimentacao)
    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

const deletarMovimentacao = async (req, res) => {
    const { id_movimentacao } = req.params;

    try {
        const movimentacao = await knex('movimentacoes')
        .where({id_movimentacao})
        .del();

        return res.status(200).json({ "mensagem": "Movimentação deletada com sucesso!"})
        
    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

module.exports = {
    criarMovimentacao,
    listarMovimentacao,
    deletarMovimentacao
}
