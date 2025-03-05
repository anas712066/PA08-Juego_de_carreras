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

function cambiarfondo1() {
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

function cambiarfondo2() {
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

function cambiarfondo3() {
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

function cambiarfondo4() {
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

function cambiarfondo5() {
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

function cambiarfondo6() {
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


function sumar10() {

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

function sumar50() {

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

function resta10() {

    if (dineroTotal + 10 == dineroMax || dineroTotal + 10 > dineroMax) { //Si el dinero llega al maximo, no subirá más que eso
        dineroTotal = dineroMax;
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }
    else {
        /*Disminuir dinero apuesta*/
        contador = contador - 10;
        /*Sumar dinero Total*/
        dineroTotal = dineroTotal + 10;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

}

function resta50() {

    if (dineroTotal + 50 == dineroMax || dineroTotal + 50 > dineroMax) { //Si el dinero llega al maximo, no subirá más que eso
        dineroTotal = dineroMax;
        contador = 0;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }
    else {
        /*Disminuir dinero apuesta*/
        contador = contador - 50;
        /*Sumar dinero Total*/
        dineroTotal = dineroTotal + 50;
        document.querySelector("#dineroApuesta").innerHTML = contador
        document.querySelector("#dineroTotal").innerHTML = dineroTotal
    }

}

//Movimiento personajes

const char1 = document.getElementById('char1')
const char2 = document.getElementById('char2')
const char3 = document.getElementById('char3')
const char4 = document.getElementById('char4')
const char5 = document.getElementById('char5')
const char6 = document.getElementById('char6')
const startButton = document.querySelector("#start");
const restartButton = document.querySelector("#restart");

let position1 = 0;
let position2 = 0;
let position3 = 0;
let position4 = 0;
let position5 = 0;
let position6 = 0;
let speed1 = 1;
let speed2 = 1;
let speed3 = 1;
let speed4 = 1;
let speed5 = 1;
let speed6 = 1;
let animationFrame1, animationFrame2, animationFrame3, animationFrame4, animationFrame5, animationFrame6;
let winnerDeclared = false;

function animate1() {
    //Cambios de velocidad aleatorio
    speed1 += (Math.random() - 0.5) * 2;
    speed1 = Math.max(0.5, Math.min(speed1, 3)); //Limitar velocidad entre 0.5 y 5
    position1 += speed1;

    //Mover el personaje
    char1.style.transform = `translateX(${position1}px)`;

    //Que pare en cierto
    if (position1 < 1230) {
        animationFrame1 = requestAnimationFrame(animate1);
    }

    //Ver el ganador
    if (position1 >= 1230 && !winnerDeclared) {
        declareWinner("char1");
    }
}

function animate2() {
    //Cambios de velocidad aleatorio
    speed2 += (Math.random() - 0.5) * 2;
    speed2 = Math.max(0.5, Math.min(speed2, 3)); //Limitar velocidad entre 0.5 y 5
    position2 += speed2;

    //Mover el personaje
    char2.style.transform = `translateX(${position2}px)`;

    //Que pare en cierto
    if (position2 < 1224) {
        animationFrame2 = requestAnimationFrame(animate2);
    }

    //Ver el ganador
    if (position2 >= 1230 && !winnerDeclared) {
        declareWinner("char2");
    }
}

function animate3() {
    //Cambios de velocidad aleatorio
    speed3 += (Math.random() - 0.5) * 2;
    speed3 = Math.max(0.5, Math.min(speed3, 3)); //Limitar velocidad entre 0.5 y 5
    position3 += speed3;

    //Mover el personaje
    char3.style.transform = `translateX(${position3}px)`;

    //Que pare en cierto
    if (position3 < 1205) {
        animationFrame3 = requestAnimationFrame(animate3);
    }

    //Ver el ganador
    if (position3 >= 1230 && !winnerDeclared) {
        declareWinner("char3");
    }
}

function animate4() {
    //Cambios de velocidad aleatorio
    speed4 += (Math.random() - 0.5) * 2;
    speed4 = Math.max(0.5, Math.min(speed4, 3)); //Limitar velocidad entre 0.5 y 5
    position4 += speed4;

    //Mover el personaje
    char4.style.transform = `translateX(${position4}px)`;

    //Que pare en cierto
    if (position4 < 1216) {
        animationFrame4 = requestAnimationFrame(animate4);
    }

    //Ver el ganador
    if (position4 >= 1230 && !winnerDeclared) {
        declareWinner("char4");
    }
}

function animate5() {
    //Cambios de velocidad aleatorio
    speed5 += (Math.random() - 0.5) * 2;
    speed5 = Math.max(0.5, Math.min(speed5, 3)); //Limitar velocidad entre 0.5 y 5
    position5 += speed5;

    //Mover el personaje
    char5.style.transform = `translateX(${position5}px)`;

    //Que pare en cierto
    if (position5 < 1227) {
        animationFrame5 = requestAnimationFrame(animate5);
    }

    //Ver el ganador
    if (position5 >= 1230 && !winnerDeclared) {
        declareWinner("char5");
    }
}

function animate6() {
    //Cambios de velocidad aleatorio
    speed6 += (Math.random() - 0.5) * 2;
    speed6 = Math.max(0.5, Math.min(speed6, 3)); //Limitar velocidad entre 0.5 y 5
    position6 += speed6;

    //Mover el personaje
    char6.style.transform = `translateX(${position6}px)`;

    //Que pare en cierto
    if (position6 < 1234) {
        animationFrame6 = requestAnimationFrame(animate6);
    }

    //Ver el ganador
    if (position6 >= 1230 && !winnerDeclared) {
        declareWinner("char6");
    }
}

// Iniciar animación
startButton.addEventListener('click', () => {
    position1 = 0; // Reiniciar posición
    position2 = 0; // Reiniciar posición
    position3 = 0; // Reiniciar posición
    position4 = 0; // Reiniciar posición
    position5 = 0; // Reiniciar posición
    position6 = 0; // Reiniciar posición
    animate1();
    animate2();
    animate3();
    animate4();
    animate5();
    animate6();
});

//Reiniciar jugadores
restartButton.addEventListener('click', () => {
    cancelAnimationFrame(animationFrame1); // Detener animación activa
    cancelAnimationFrame(animationFrame2); // Detener animación activa
    cancelAnimationFrame(animationFrame3); // Detener animación activa
    cancelAnimationFrame(animationFrame4); // Detener animación activa
    cancelAnimationFrame(animationFrame5); // Detener animación activa
    cancelAnimationFrame(animationFrame6); // Detener animación activa
    position1 = 0; // Reiniciar posición
    char1.style.transform = `translateX(${position1}px)`; // Aplicar reinicio
    char2.style.transform = `translateX(${position1}px)`; // Aplicar reinicio
    char3.style.transform = `translateX(${position1}px)`; // Aplicar reinicio
    char4.style.transform = `translateX(${position1}px)`; // Aplicar reinicio
    char5.style.transform = `translateX(${position1}px)`; // Aplicar reinicio
    char6.style.transform = `translateX(${position1}px)`; // Aplicar reinicio
});


//Ver quien es el ganador
function declareWinner(ganador) {
    winnerDeclared = true;
    winnerImage.style.display = "block"; //Mostrar la imagen del ganador

    if (ganador == "char1") {
        winnerImage.src = "images/GIFS/hueso.gif";
    }
    else if (ganador == "char2") {
        winnerImage.src = "Images/GIFS/sonic.gif";
    }
}