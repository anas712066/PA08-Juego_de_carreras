document.querySelector("#btnSum10").addEventListener("click", sumar10);
document.querySelector("#btnSum50").addEventListener("click", sumar50);

document.querySelector("#btnRes10").addEventListener("click", resta10);
document.querySelector("#btnRes50").addEventListener("click", resta50);

let contador = 0;
let dineroTotal = 1000;


function sumar10(){

    if (dineroTotal == 0 || dineroTotal < 0){    
        contador = contador + 0;
        dineroTotal = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

    else{
        /*Aumentar dinero apuesta*/
        contador = contador + 10;
        /*Disminuir dinero Total*/
        dineroTotal = dineroTotal -10;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

}

function sumar50(){

    if (dineroTotal == 0 || dineroTotal < 0){    
        contador = contador + 0;
        dineroTotal = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

    else{
        /*Aumentar dinero apuesta*/
        contador = contador + 50;
        /*Disminuir dinero Total*/
        dineroTotal = dineroTotal -50;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

}

function resta10(){

    contador = contador - 10;
    document.querySelector("#dineroApuesta").innerHTML = contador

    if (contador <0 || contador == 0){
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
    }

    dineroTotal = dineroTotal +10;
    document.querySelector("#dineroTotal").innerHTML = dineroTotal;

}

function resta50(){

    contador = contador - 50;
    document.querySelector("#dineroApuesta").innerHTML = contador

    if (contador <0 || contador == 0){
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
    }

    dineroTotal = dineroTotal +50;
    document.querySelector("#dineroTotal").innerHTML = dineroTotal;

}

