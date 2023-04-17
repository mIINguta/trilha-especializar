const express = require('express')
const app = express()

app.listen('3000')
console.log('Rodando')

app.route('/').get((req,res) => res.send("Hello"))


