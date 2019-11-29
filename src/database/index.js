const mongoose = require('mongoose')

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost/apirest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Padrão para projetos MongoDB
mongoose.Promise = global.Promise

module.exports = mongoose
