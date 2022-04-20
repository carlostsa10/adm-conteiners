const knex = require('knex')

const listarMovimentacoesCliente = async (req, res) =>{
    const { id_cliente } = req.params

    try {
        const movimentacoes = await knex('movimentacoes')
        .where({id_cliente})

        return res.status(200).json(movimentacoes)
    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

const listarMovimentacoesTipo = async (req, res) =>{
    const { tipo } = req.params;

    try {
        const movimentacao = await knex('movimentacoes')
        .where({tipo});

        return res.status(200).json(movimentacao)
    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

module.exports = {
    listarMovimentacoesCliente,
    listarMovimentacoesTipo
}