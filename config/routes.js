const express = require('express')
const routes = express.Router()
const mysql = require('mysql2')

//conectionString
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mysql8'
})

//R ead
//A tabela pessoas será mostrada quando a rota padrão da API for acessada
routes.get('/', (req, res) => {
    connection.query('SELECT * FROM pessoas', (err, results) => {
        if (err) {
            console.error('Não foi possível acessar a lista de pessoas', err)
            return res.status(500).json({error: 'Não foi possível acessar a lista de pessoas'})
        }
        //Retorna a lista de pessoas em caso de sucesso
        return res.json(results)        
    })
})
//C reate
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).json({error: 'Erro. Verifique se os dados correspondem ao padrão da tabela pessoas'})
    
        connection.query('INSERT INTO pessoas SET ?', body, (err, result) => {
            if (err) {
                console.error('Erro ao registrar uma nova pessoa', err)
                return res.status(500).json({error: 'Erro ao registrar uma nova pessoa'})
            }
            return res.json({id: result.insertId, ...body})
        })
})
//D elete
routes.delete('/:id', (req, res) => {
    const id = req.params.id 
    //A cláusula WHERE é importante para Não excluir o banco inteiro
    connection.query('DELETE FROM pessoas WHERE id = ?', [id], (err, result) => {
        if(err) {
            console.error('O registro não foi excluído do banco de dados', err)
            return res.status(500).json({error: 'O registro não foi excluído do banco de dados'})
        }
        //Se o registro do id informado não constar no banco de dados
        if(result.affectedRows === 0){
            return res.status(404).json({error: 'Não existe este registro no banco de dados'})
        }

        return res.json({ Sucesso: 'Registro Excluído com sucesso'})
    })
})
//U pdate
routes.put('/:id', (req, res) => {
    const id = req.params.id
    //A variável "updatedPessoa" receberá os dados que serão alterados do registro do banco de dados
    const updatedPessoa = req.body
    //Os novos valores serão inseridos no array na mesma ordem
    connection.query('UPDATE pessoas SET ? WHERE id = ?', [updatedPessoa, id], (err, result) => {
        if (err){
            console.error('O registro não foi atualizado', err)
            return res.status(500).json({ error: 'O registro não foi atualizado'})
        }
        if(result.affectedRows === 0){
            return res.status(404).json({ error: 'Não existe este registro no banco de dados'})
        }

        return res.json({ Sucesso: 'Registro Atualizado com sucesso'})
    })

})
//GetById
routes.get('/:id', (req, res) => {
    const id = req.params.id 
    //A cláusula WHERE é importante para especificar o registro em questão
    connection.query('SELECT * FROM pessoas WHERE id = ?', [id], (err, result) => {
        if(err) {
            console.error('O registro não foi Encontrado no banco de dados', err)
            return res.status(500).json({error: 'O registro não foi Encontrado no banco de dados'})
        }
        //Se a quantidade de registros for igual a "0"
        if(result.length === 0){
            return res.status(404).json({error: 'Não existe este registro no banco de dados'})
        }
        //Como resultado, retornará o registro de índice "0".
        //Ou seja, o primeiro registro
        return res.json(result[0])
    })
})

module.exports = routes