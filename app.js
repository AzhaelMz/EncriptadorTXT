
const matriz =

function textoFinal(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function encriptar(){
    let UserText = document.getElementById('encryptor').value;
    if (UserText === UserText){
        textoFinal ('h2', UserText); 
    }
    console.log(UserText);
    return;
    
}

function desencriptar(){
    alert('click a desencriptar');
}

