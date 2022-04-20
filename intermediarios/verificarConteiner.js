const verificarConteiner = (req, res, next) => {
    const { cliente, num_conteiner, tipo_conteiner, status_conteiner, categoria } = req.body

    if (!cliente || !num_conteiner || !status_conteiner || !tipo_conteiner || !categoria) {
        return res.status(400).json({ "mensagem": "Todos os campos são obrigatórios!"})
    }
    
    const arrayNum = [0,1,2,3,4,5,6,7,8,9]
    
    if (arrayNum.includes(num_conteiner.substr(0,3))){
        return res.status(400).json({ "mensagem": "O início do registro do conteiner não deve conter números!"})
    }
    
    if (!arrayNum.includes(num_conteiner.substr(4))){
        return res.status(400).json({ "mensagem": "O final do registro do conteiner não deve conter letras!"})
    }
    
    if (num_conteiner.length !== 11){
        return res.status(400).json({ "mensagem": "O registro do conteiner deve conter 11 caracteres!"})
    }
    
    if (status_conteiner.trim() !== "Cheio" && status_conteiner.trim() !== "Vazio"){
        return res.status(400).json({ "mensagem": "O status do conteiner deve ser 'Cheio' ou 'Vazio'!"})
        
    }
    
    if (!num_conteiner.length){
        return res.status(400).json({ "mensagem": "Nenhum conteiner encontrado"})
    }

    next()
}

module.exports = verificarConteiner