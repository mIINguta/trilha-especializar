import axios from "axios";

console.log("Consumindo api do Github");
axios
  .get("https://api.github.com/users/mIINguta")
  .then((res) => {
    const user = res.data;
    console.log(user)
    console.log(user.name)
    console.log(user.location)
        })

  

  .catch((err) => console.log(err))
  .finally(() => console.log("A requisição finalizou"))
