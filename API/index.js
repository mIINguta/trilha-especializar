const axios = require('axios')
const express = require('express')
const app = express()

app.listen('3000')



app.route('/').get((req,res) =>{

axios.get("https://api.github.com/users/mIINguta/repos")
.then(result => res.send(result.data))
.catch(erro => console.error(erro))

})


