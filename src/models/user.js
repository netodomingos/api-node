const mongoose = require('../database/index')
const bcrypt = require('bcryptjs')

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
// Configurações antes de salvar o user
UserSchema.pre('save', async function (next){
    // Criando Hash e fazendo ele apontar para a password
    const hash = await bcrypt.hash(this.password, 10)

    // Passando o valor de Hash para ser apresentando no password
    this.password = hash

    next()
})

// Colocando tudo de UserSchema em User
const User = mongoose.model('User', UserSchema)

module.exports = User