const userInput = document.querySelector("#user-input");
const TextoFinal = document.querySelector("#texto-final");
const btnCopiar = document.querySelector("#btn-copiar");

const matriz_encriptador = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o","ober"],
    ["u","ufat"],
]

function btnencriptar(){
    const texto = encriptar(userInput.value);
    TextoFinal.textContent = texto;
    mostrarCopiar(texto);
}

function encriptar(textoEncriptado){
    for (let i = 0; i < matriz_encriptador.length; i++){
        if (textoEncriptado.includes(matriz_encriptador[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_encriptador[i][0],
                matriz_encriptador[i][1]
            )
        }
    }
    return textoEncriptado;
}

function btndesencriptar(textoEncriptado){
    const texto= desencriptar(TextoFinal.textContent);
    TextoFinal.textContent = texto;
    mostrarCopiar(texto);
}

function desencriptar(textoEncriptado){
    for (let i = 0; i < matriz_encriptador.length; i++){
        if (textoEncriptado.includes(matriz_encriptador[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_encriptador[i][1],
                matriz_encriptador[i][0]
            )
        }
    }
    return textoEncriptado;
}

function mostrarCopiar(){
    const texto = TextoFinal.textContent.trim();
    if (texto !== ""){
        btnCopiar.style.display = "inline-block";   
    } else{
        btnCopiar.style.display = "none";
    }
}

function copiarTexto(){
    const textoACopiar = TextoFinal.textContent;
    navigator.clipboard.writeText(textoACopiar)
    .then(() =>{
        alert("Texto copiado al portapapeles");
    })
    .catch(()=>{
        console.error('Error al copiar texto:');
    });
}