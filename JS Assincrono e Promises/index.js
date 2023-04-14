// estrutura de uma promise normal
const promessa = new Promise((response, reject) => {
  return response('notok')
});

promessa.then((response) => console.log(response));
promessa.catch(erro => console.log(erro))
promessa.finally(() => console.log('Finalizou'))

//usando async

async function start(){
  const result = await promessa
  console.log(result + "vtnc")
} 
start()

//usando async de forma completa para substituir as 3 linhas (promessa.then,catch,finaly)

async function startt(){
  try{
    const result = await promessa
    console.log(result)

  }catch (erro){
    console.log(erro)
  } 
  finally {console.log('Finalizou')}

}
startt() 
