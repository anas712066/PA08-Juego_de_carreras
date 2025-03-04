document.querySelector("#btnSum10").addEventListener("click", sumar10);
document.querySelector("#btnSum50").addEventListener("click", sumar50);

document.querySelector("#btnRes10").addEventListener("click", resta10);
document.querySelector("#btnRes50").addEventListener("click", resta50);

let contador = 0;
let dineroTotal = 1000;
let dineroMax = 1000;

function sumar10(){

    if (dineroTotal == 0 || dineroTotal < 0) {
        contador = contador + 0;
        dineroTotal = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

    else {
        /*Aumentar dinero apuesta*/
        contador = contador + 10;
        /*Disminuir dinero Total*/
        dineroTotal = dineroTotal - 10;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

}

function sumar50(){

   if (dineroTotal - 50 < 0 || dineroTotal - 50 == 0) { /*Si la resta es menor que 0 o igual a 0, es que llegó a la maxima apuesta posible*/
        /*Aumentar dinero apuesta*/
        contador = dineroMax;
        /*Disminuir dinero Total*/
        dineroTotal = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }
    else { 
        /*Aumentar dinero apuesta*/
        contador = contador + 50;
        /*Disminuir dinero Total*/
        dineroTotal = dineroTotal - 50;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

}

function resta10(){

    if(dineroTotal + 10 == dineroMax  || dineroTotal + 10 > dineroMax){ //Si el dinero llega al maximo, no subirá más que eso
        dineroTotal = dineroMax;
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }
    else{
        /*Disminuir dinero apuesta*/
        contador = contador - 10;
        /*Sumar dinero Total*/
        dineroTotal = dineroTotal + 10;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal 
    }

}

function resta50(){

    if(dineroTotal + 50 == dineroMax  || dineroTotal + 50 > dineroMax){ //Si el dinero llega al maximo, no subirá más que eso
        dineroTotal = dineroMax;
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }
    else{
        /*Disminuir dinero apuesta*/
        contador = contador - 50;
        /*Sumar dinero Total*/
        dineroTotal = dineroTotal + 50;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal 
    }

}

