const express = require('express')
const app = express()

app.listen('3000')
console.log('Rodando')

//midleware (ponte entre as requisições. usado para entender o q esta sendo requisitado)
app.use(express.json())

app.route('/:nome').get((req,res) => {
     res.send(req.params.nome)
     console.log(req.params.nome)
})

