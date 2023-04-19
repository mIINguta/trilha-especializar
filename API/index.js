const express = require('express')
const app = express()

app.listen('3000')
console.log('Rodando')

//midleware (ponte entre as requisições. usado para entender o q esta sendo requisitado)
app.use(express.json())

app.route('/').post((req,res) => {
     res.send(`Chegou aqui marujo: ${req.body.nome}`)
     console.log(req.body)
})

