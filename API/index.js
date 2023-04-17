const express = require('express')
const app = express()

let author = "Gustavo Minguta"

app.listen('3000')
console.log('Rodando')

//midleware (ponte entre as requisições. usado para entender o q esta sendo requisitado)
app.use(express.json())

app.route('/').get((req,res) => res.send(author))
app.route('/').put((req,res) =>{
    author = req.body.author
    res.send(author)
} )
