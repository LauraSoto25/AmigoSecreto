// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista=[];
let listaNumerosSorteados=[];
function agregarAmigo(){
    let amigo=document.querySelector('#amigo');
    if(amigo.value.length>0){ 
        lista.push(amigo.value);
        let nombreAmigo=document.createElement('li');
        nombreAmigo.textContent = amigo.value;
        document.getElementById("listaAmigos").appendChild(nombreAmigo);
        limpiarcaja();
    }
    else{
        alert("Por favor ingrese un nombre valido");
    }
}
function sortearAmigo(){
    let indice=numeroAleatorio();
    amigoSecreto=lista[indice];
    let resultado=document.querySelector('#resultado');
    resultado.textContent=amigoSecreto;
}
function limpiarcaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value='';
}
function numeroAleatorio(){
    let tamañoLista=lista.length;
    if(listaNumerosSorteados.length==lista.length){ 
        alert("Ya han sido seleccionados todos los nombres, por favor recargue la pagina para volver a empezar");
        return;
    }
    let numeroRandom=Math.floor(Math.random()*tamañoLista);
    if(listaNumerosSorteados.includes(numeroRandom)){
        return numeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroRandom);
        return numeroRandom;
    }
}
