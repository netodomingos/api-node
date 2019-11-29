const mongoose = require('../database/index')

// Criando Schema do usuário
const UserSchema = new mongoose.Schema({
    name: {
        type: String, // Tipo.
        required: true, // Obrigatório.
    },
    email: {
        type: String,
        unique: true, // Torna único.
        required: true,
        lowercase: true, // Converte para lowercase.

    }, 
    password: {
        type: String,
        required: true,
        select: false, // Faz com que as senhas dos usuários não venham no Arry de Busca.
    },
    createdAt: {
        type: Date,
        default: Date.now, // Retorna a data atual como default.
    },
})

// Colocando tudo de UserSchema em User
const User = mongoose.model('User', UserSchema)

module.exports = User