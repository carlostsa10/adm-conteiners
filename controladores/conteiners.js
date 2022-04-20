const res = require('express/lib/response');
const knex = require('knex');

const cadastrarConteiner = async (req, res) => {
    const { cliente, num_conteiner, tipo_conteiner, status_conteiner, categoria } = req.body

    try {
        const conteiner = await knex('conteiner').insert({
            cliente,
            num_conteiner,
            tipo_conteiner,
            status_conteiner,
            categoria
        });

        return res.status(200).json({
            "mensagem": "Conteiner cadastrado com sucesso!"
        })
    } catch(error){
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

const procurarConteiner = (conteiner) => {
    if(!conteiner){
        return res.status(400).json({"mensagem": "Conteiner não encontrado!"})
    }
}

const listarConteiners = async (req, res) => {
    const { conteiner } = req;

    try {
        const conteiners = await knex('conteiner');
        procurarConteiner(conteiner)

        return res.status(200).json(conteiners)

    } catch(error){
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

const obterConteiner = async (req, res) => {
    const { id } = req.params

    try {
        const conteiner = await knex('conteiner').where({id}).first();
        procurarConteiner(conteiner);

        return res.status(200).json(conteiner)
    } catch (error) {
        return res.status(400).json({
        "mensagem": "Erro desconhecido" + error.message
        }) 
    }
}

const atualizarConteiner = async (req, res) => {
    const { id } = req.params;

    try {
        procurarConteiner(conteiner)
        const conteiner = await knex('conteiner')
        .where( { id })
        .update(req.body)

        return res.status(200).json({ 
            "mensagem": "Conteiner atualizado com sucesso!"
        })

    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}

const deletarConteiner = async (req, res) => {
    const { id } = req.params

    try {
        procurarConteiner(conteiner)
        const conteiner = await knex('conteiner')
        .where({id})
        .del()

        return res.status(200).json({
            "mensagem": "Conteiner deletado com sucesso!"
        })
    } catch (error) {
        return res.status(400).json({
            "mensagem": "Erro desconhecido" + error.message
        })
    }
}
module.exports = {
    cadastrarConteiner,
    listarConteiners,
    obterConteiner,
    atualizarConteiner,
    deletarConteiner
}