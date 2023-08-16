//chamando as dependencias e atribuindo atraves das variaveis dentro do javascript
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const res = require('express/lib/response')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
    { "\"id\"": 1, "\"Nome\"": "Starla Musicka", "\"Data de Nascimento\"": "04/09/1988", "\"Sexo\"": "F", "\"Telefone\"": "91356589473", "\"Documento\"": "85502732777" },
    { "\"id\"": 2, "\"Nome\"": "Cherice Fellgett", "\"Data de Nascimento\"": "04/02/1959", "\"Sexo\"": "M", "\"Telefone\"": "82608781080", "\"Documento\"": "02558981538" },
    { "\"id\"": 3, "\"Nome\"": "Nathan Hacquel", "\"Data de Nascimento\"": "08/07/1966", "\"Sexo\"": "M", "\"Telefone\"": "27411433426", "\"Documento\"": "35351034131" },
    { "\"id\"": 4, "\"Nome\"": "Sonny Gladdor", "\"Data de Nascimento\"": "28/02/1988", "\"Sexo\"": "F", "\"Telefone\"": "67770231967", "\"Documento\"": "17381523421" },
    { "\"id\"": 5, "\"Nome\"": "Dean Adrienne", "\"Data de Nascimento\"": "16/06/1987", "\"Sexo\"": "M", "\"Telefone\"": "56584291721", "\"Documento\"": "32701516163" },
    { "\"id\"": 6, "\"Nome\"": "Ardelis Sarten", "\"Data de Nascimento\"": "03/02/1980", "\"Sexo\"": "M", "\"Telefone\"": "85573316366", "\"Documento\"": "85221706773" },
    { "\"id\"": 7, "\"Nome\"": "Krishnah Dane", "\"Data de Nascimento\"": "07/08/1968", "\"Sexo\"": "M", "\"Telefone\"": "45219425074", "\"Documento\"": "01503724191" },
    { "\"id\"": 8, "\"Nome\"": "Flori Hynes", "\"Data de Nascimento\"": "20/09/1968", "\"Sexo\"": "M", "\"Telefone\"": "57823414206", "\"Documento\"": "70361067600" },
    { "\"id\"": 9, "\"Nome\"": "Maighdiln Fiander", "\"Data de Nascimento\"": "05/02/2019", "\"Sexo\"": "M", "\"Telefone\"": "34039824805", "\"Documento\"": "75162534237" },
    { "\"id\"": 10, "\"Nome\"": "Colet Onslow", "\"Data de Nascimento\"": "23/12/2009", "\"Sexo\"": "F", "\"Telefone\"": "52889366218", "\"Documento\"": "90347840677" }
]
//rota defaut(nenhum nome depois da porta)
//requisição e resposta que retornará o conteúdo da variável db
app.get('/', (req, res) => {
    return res.json(db)
})

app.listen(8090, () => {
    console.log(`Express started at http://localhost:8090`)
})