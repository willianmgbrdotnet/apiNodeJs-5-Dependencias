//chamando as dependencias e atribuindo atraves das variaveis dentro do javascript
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.listen(8090, () => {
    console.log(`Express started at http://localhost:8090`)
})