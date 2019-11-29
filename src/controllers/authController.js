const express = require('express')

const User = require('../models/user')

// Criando Rota com Express
const router = express.Router()

// Rota de Cadastro do usuário
router.post('/register', async (request, response) => {

    // tentar adicionar as informações que o usúario passar, na database.
    try{
        const user = await User.create(request.body)

        return response.send({ user })
    }

    // Tratamento de erro no registro
    catch(error){
        return response.status(400).send({
            error: 'Registration Failed!'
        })
    }
})

// Recebe App
// toda vez que houver requisições no /auth, o router.post irá rodar
module.exports = (app) => app.use('/auth', router)