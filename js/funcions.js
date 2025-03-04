//Valores de Sumar y restar valores
document.querySelector("#btnSum10").addEventListener("click", sumar10);
document.querySelector("#btnSum50").addEventListener("click", sumar50);

document.querySelector("#btnRes10").addEventListener("click", resta10);
document.querySelector("#btnRes50").addEventListener("click", resta50);

//Valores Efecto seleccionar personajes
document.querySelector("#per1").addEventListener("click", cambiarfondo1);
document.querySelector("#per2").addEventListener("click", cambiarfondo2);
document.querySelector("#per3").addEventListener("click", cambiarfondo3);
document.querySelector("#per4").addEventListener("click", cambiarfondo4);
document.querySelector("#per5").addEventListener("click", cambiarfondo5);
document.querySelector("#per6").addEventListener("click", cambiarfondo6);

//Efecto seleccionar personajes
let color = 'rgb(30, 164, 0)';
let fondo = 'rgb(112, 238, 129)';
personaje = 0;

function cambiarfondo1(){
    //Personaje principal
    document.querySelector("#dp1").style.backgroundColor = color
    personaje = 1;
    
    //Otros personajes
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo

}

function cambiarfondo2(){
    //Personaje principal
    document.querySelector("#dp2").style.backgroundColor = color
    personaje = 2;
    
    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo
}

function cambiarfondo3(){
    //Personaje principal
    document.querySelector("#dp3").style.backgroundColor = color
    personaje = 3;
    
    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo
}

function cambiarfondo4(){
    //Personaje principal
    document.querySelector("#dp4").style.backgroundColor = color
    personaje = 4;
    
    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo
}

function cambiarfondo5(){
    //Personaje principal
    document.querySelector("#dp5").style.backgroundColor = color
    personaje = 5;
    
    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo
}

function cambiarfondo6(){
    //Personaje principal
    document.querySelector("#dp6").style.backgroundColor = color
    personaje = 6;
    
    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
}

//Sumar y restar valores
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

