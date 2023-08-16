const express = require('express')
const routes = express.Router()

let db = [
    { "\"id\"": 1, "\"Nome\"": "Starla Musicka", "\"Data de Nascimento\"": "04/09/1988", "\"Sexo\"": "F"}, 
    { "\"id\"": 2, "\"Nome\"": "Cherice Fellgett", "\"Data de Nascimento\"": "04/02/1959", "\"Sexo\"": "M"},
    { "\"id\"": 3, "\"Nome\"": "Nathan Hacquel", "\"Data de Nascimento\"": "08/07/1966", "\"Sexo\"": "M"},
    { "\"id\"": 4, "\"Nome\"": "Sonny Gladdor", "\"Data de Nascimento\"": "28/02/1988", "\"Sexo\"": "F"},
    { "\"id\"": 5, "\"Nome\"": "Dean Adrienne", "\"Data de Nascimento\"": "16/06/1987", "\"Sexo\"": "M"},
    { "\"id\"": 6, "\"Nome\"": "Ardelis Sarten", "\"Data de Nascimento\"": "03/02/1980", "\"Sexo\"": "M"},
    { "\"id\"": 7, "\"Nome\"": "Krishnah Dane", "\"Data de Nascimento\"": "07/08/1968", "\"Sexo\"": "M"},
    { "\"id\"": 8, "\"Nome\"": "Flori Hynes", "\"Data de Nascimento\"": "20/09/1968", "\"Sexo\"": "M"},
    { "\"id\"": 9, "\"Nome\"": "Maighdiln Fiander", "\"Data de Nascimento\"": "05/02/2019", "\"Sexo\"": "M"},
    { "\"id\"": 10, "\"Nome\"": "Colet Onslow", "\"Data de Nascimento\"": "23/12/2009", "\"Sexo\"": "F"}
]
//rota defaut(nenhum nome depois da porta)
//requisição e resposta que retornará o conteúdo da variável db
routes.get('/', (req, res) => {
    return res.json(db)
})
//Criar o corpo da requisição
routes.post('/add', (req, res) => {
    const body = req.body 

    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})


module.exports = routes