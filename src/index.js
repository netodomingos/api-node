const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Fazendo a API entender as requisições
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
    console.log('Server On!')
})

// Passando o App como parametro para o authController
require('./controllers/authController')(app)