const url ="http://localhost:5500/api"

//visualizando todos os usuários
function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}
//pegando apenas um usuário
function getUser(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
     userName.textContent = JSON.stringify(data.name)
     userCity.textContent = JSON.stringify(data.city)
     userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}
//adicionando usuario utilizando o const
function addUser(newUser){
    fetch(url, {
        method:"POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }    
    
    }).then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error=> console.log(error))
}
//atualizando o cadastro de um usuario, com userupdate
function updateUser(userUpdate,id){
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(userUpdate),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
    }})
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))  
    }
         
//variaveis
const newUser = {
    name: "Gustavo Minguta",
    avatar:"http://source.unsplash.com/random?nissangtr",
    city:"Belford Roxo"
}
const userUpdate = {
    name: "Marcelo Minguta",
    avatar:"https://source.unsplash.com/random?ferrari",
    city:"Duque de Caxias"
}

//rodando funcções
getUsers()
getUser(1)
//addUser(newUser)
updateUser(userUpdate, 1)
