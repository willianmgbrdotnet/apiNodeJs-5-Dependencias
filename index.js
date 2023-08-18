//chamando as dependencias e atribuindo atraves das variaveis dentro do javascript
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
//O objeto "res" não é mais necessário aqui. Já é passado como parâmetro nas requisições

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

//Rotas movidas para config/routes

app.listen(8090, () => {
    console.log(`Express started at http://localhost:8090`)
})