document.querySelector("#btnSum10").addEventListener("click", sumar10);
document.querySelector("#btnSum50").addEventListener("click", sumar50);

document.querySelector("#btnRes10").addEventListener("click", resta10);
document.querySelector("#btnRes50").addEventListener("click", resta50);

let contador = 1000;

function sumar10(){

    contador = contador + 10;
    document.querySelector("#dineroApuesta").innerHTML = contador

}

function sumar50(){

    contador = contador + 50;
    document.querySelector("#dineroApuesta").innerHTML = contador

}

function resta10(){

    contador = contador - 10;
    document.querySelector("#dineroApuesta").innerHTML = contador

    if (contador <0 || contador == 0){
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
    }

}

function resta50(){

    contador = contador - 50;
    document.querySelector("#dineroApuesta").innerHTML = contador

    if (contador <0 || contador == 0){
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
    }

}

