const express = require('express')
const app = express()

app.listen('3000')
console.log('Rodando')

//midleware (ponte entre as requisições. usado para entender o q esta sendo requisitado)
app.use(express.json())

app.route('/').get((req,res)=> {
     res.send(req.query)
     console.log(req.query)
})

app.route('/about/user').get((req,res)=> {
     res.send(req.query)
     console.log(req.query)
})

// a sintaxe da url é:
//localhost:3000/?nome=Gustavo
//localhost:3000/?nome=Gustavo&cidade=Rio de Janeiro
