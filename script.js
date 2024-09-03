// 0 - Adicionar evento em botão para executar contexto da função

async function executar(){
    const elementoInput = document.getElementById("idPersonagem")
    const id = elementoInput.value
    const response = await buscarRespostaDePersonagemDaAPI(id)
    const personagem = await response.json()
    const statusCode = response.status;
    configuraTelaPersonagem(statusCode, personagem);
}

function configuraTelaPersonagem(statusCode, personagem){
    const elementoImg = document.getElementById("imgPersonagem")
    const elementoNome = document.getElementById("nomePersonagem")
    if(statusCode == 200){
        elementoImg.src = personagem.image
        elementoNome.innerHTML = personagem.name
    }else {
        elementoImg.src = "./userDefault.jpg"
        elementoNome.innerHTML = "Personagem não Encontrado"
    }
}

async function buscarRespostaDePersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const response = await fetch(url)
    return response
}