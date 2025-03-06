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

//Cerrar ventana emergente
document.querySelector("#cerrar_ventana").addEventListener("click", cerrarVentana);

var ventana = document.getElementById('ventana');
var cuadro1 = document.getElementById('cuadro1');
var cuadro2 = document.getElementById('cuadro2');
var cuadro3 = document.getElementById('cuadro3');

function cerrarVentana(){
    ventana.style.display = 'none';
    cuadro1.style.display = 'block';
    cuadro2.style.display = 'block';
    cuadro3.style.display = 'block';
}

//Efecto seleccionar personajes
let color = 'rgb(30, 164, 0)';
let fondo = 'rgb(112, 238, 129)';
let personaje = 0;

function cambiarfondo1() {
    //Personaje principal
    document.querySelector("#dp1").style.backgroundColor = color
    document.querySelector("#dp1").style.border = "2px solid orange" //Borde
    personaje = 1;

    //Quitar los bordes
    document.querySelector("#dp2").style.border = "none" //Borde
    document.querySelector("#dp3").style.border = "none" //Borde
    document.querySelector("#dp4").style.border = "none" //Borde
    document.querySelector("#dp5").style.border = "none" //Borde
    document.querySelector("#dp6").style.border = "none" //Borde

    //Quitar los demás fondos
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo

}

function cambiarfondo2() {
    //Personaje principal
    document.querySelector("#dp2").style.backgroundColor = color
    document.querySelector("#dp2").style.border = "2px solid orange" //Borde
    personaje = 2;

    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo

    //Quitar los bordes
    document.querySelector("#dp1").style.border = "none" //Borde
    document.querySelector("#dp3").style.border = "none" //Borde
    document.querySelector("#dp4").style.border = "none" //Borde
    document.querySelector("#dp5").style.border = "none" //Borde
    document.querySelector("#dp6").style.border = "none" //Borde
}

function cambiarfondo3() {
    //Personaje principal
    document.querySelector("#dp3").style.backgroundColor = color
    document.querySelector("#dp3").style.border = "2px solid orange" //Borde
    personaje = 3;

    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo

    //Quitar los bordes
    document.querySelector("#dp1").style.border = "none" //Borde
    document.querySelector("#dp2").style.border = "none" //Borde
    document.querySelector("#dp4").style.border = "none" //Borde
    document.querySelector("#dp5").style.border = "none" //Borde
    document.querySelector("#dp6").style.border = "none" //Borde
}

function cambiarfondo4() {
    //Personaje principal
    document.querySelector("#dp4").style.backgroundColor = color
    document.querySelector("#dp4").style.border = "2px solid orange" //Borde
    personaje = 4;

    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo

    //Quitar los bordes
    document.querySelector("#dp1").style.border = "none" //Borde
    document.querySelector("#dp2").style.border = "none" //Borde
    document.querySelector("#dp3").style.border = "none" //Borde
    document.querySelector("#dp5").style.border = "none" //Borde
    document.querySelector("#dp6").style.border = "none" //Borde
}

function cambiarfondo5() {
    //Personaje principal
    document.querySelector("#dp5").style.backgroundColor = color
    document.querySelector("#dp5").style.border = "2px solid orange" //Borde
    personaje = 5;

    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo

    //Quitar los bordes
    document.querySelector("#dp1").style.border = "none" //Borde
    document.querySelector("#dp2").style.border = "none" //Borde
    document.querySelector("#dp3").style.border = "none" //Borde
    document.querySelector("#dp4").style.border = "none" //Borde
    document.querySelector("#dp6").style.border = "none" //Borde
}

function cambiarfondo6() {
    //Personaje principal
    document.querySelector("#dp6").style.backgroundColor = color
    document.querySelector("#dp6").style.border = "2px solid orange" //Borde
    personaje = 6;

    //Otros personajes
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo

    //Quitar los bordes
    document.querySelector("#dp1").style.border = "none" //Borde
    document.querySelector("#dp2").style.border = "none" //Borde
    document.querySelector("#dp3").style.border = "none" //Borde
    document.querySelector("#dp4").style.border = "none" //Borde
    document.querySelector("#dp5").style.border = "none" //Borde
}

//Sumar y restar valores
let contador = 0; //Dinero apostado
let dineroTotal = 1000; //Dinero que se muestra, o el total
let dineroMax = 1000; //Cantidad para no pasarse del total maximo

//Funcion para sumar 10
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

//Funcion para sumar 50
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

//Funcion para restar 10
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

//Funcion para restar 50
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
const winnerImage = document.getElementById('ganador');
let position1 = 0; //Posicion personaje 1
let position2 = 0; //Posicion personaje 2
let position3 = 0; //Posicion personaje 3
let position4 = 0; //Posicion personaje 4
let position5 = 0; //Posicion personaje 5
let position6 = 0; //Posicion personaje 6
let speed1 = 1; //Velocidad personaje 1
let speed2 = 1; //Velocidad personaje 2
let speed3 = 1; //Velocidad personaje 3
let speed4 = 1; //Velocidad personaje 4
let speed5 = 1; //Velocidad personaje 5
let speed6 = 1; //Velocidad personaje 6
let animationFrame1, animationFrame2, animationFrame3, animationFrame4, animationFrame5, animationFrame6; //Animacion de movimiento de los personajes
let winnerDeclared = false; //Ganador

//Cambios de velocida de de forma aleatoria (Personaje 1)
function animate1() {
    //Cambios de velocidad aleatorio
    speed1 += (Math.random() - 0.5) * 2;
    speed1 = Math.max(0.5, Math.min(speed1, 5)); //Limitar velocidad entre 0.5 y 5
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

//Cambios de velocida de de forma aleatoria (Personaje 2)
function animate2() {
    //Cambios de velocidad aleatorio
    speed2 += (Math.random() - 0.5) * 2;
    speed2 = Math.max(0.5, Math.min(speed2, 5)); //Limitar velocidad entre 0.5 y 5
    position2 += speed2;

    //Mover el personaje
    char2.style.transform = `translateX(${position2}px)`;

    //Que pare en cierto
    if (position2 < 1224) {
        animationFrame2 = requestAnimationFrame(animate2);
    }

    //Ver el ganador
    if (position2 >= 1224 && !winnerDeclared) {
        declareWinner("char2");
    }
}

//Cambios de velocida de de forma aleatoria (Personaje 3)
function animate3() {
    //Cambios de velocidad aleatorio
    speed3 += (Math.random() - 0.5) * 2;
    speed3 = Math.max(0.5, Math.min(speed3, 5)); //Limitar velocidad entre 0.5 y 5
    position3 += speed3;

    //Mover el personaje
    char3.style.transform = `translateX(${position3}px)`;

    //Que pare en cierto
    if (position3 < 1205) {
        animationFrame3 = requestAnimationFrame(animate3);
    }

    //Ver el ganador
    if (position3 >= 1205 && !winnerDeclared) {
        declareWinner("char3");
    }
}

//Cambios de velocida de de forma aleatoria (Personaje 4)
function animate4() {
    //Cambios de velocidad aleatorio
    speed4 += (Math.random() - 0.5) * 2;
    speed4 = Math.max(0.5, Math.min(speed4, 5)); //Limitar velocidad entre 0.5 y 5
    position4 += speed4;

    //Mover el personaje
    char4.style.transform = `translateX(${position4}px)`;

    //Que pare en cierto
    if (position4 < 1216) {
        animationFrame4 = requestAnimationFrame(animate4);
    }

    //Ver el ganador
    if (position4 >= 1216 && !winnerDeclared) {
        declareWinner("char4");
    }
}

//Cambios de velocida de de forma aleatoria (Personaje 5)
function animate5() {
    //Cambios de velocidad aleatorio
    speed5 += (Math.random() - 0.5) * 2;
    speed5 = Math.max(0.5, Math.min(speed5, 5)); //Limitar velocidad entre 0.5 y 5
    position5 += speed5;

    //Mover el personaje
    char5.style.transform = `translateX(${position5}px)`;

    //Que pare en cierto
    if (position5 < 1227) {
        animationFrame5 = requestAnimationFrame(animate5);
    }

    //Ver el ganador
    if (position5 >= 1227 && !winnerDeclared) {
        declareWinner("char5");
    }
}

//Cambios de velocida de de forma aleatoria (Personaje 6)
function animate6() {
    //Cambios de velocidad aleatorio
    speed6 += (Math.random() - 0.5) * 2;
    speed6 = Math.max(0.5, Math.min(speed6, 5)); //Limitar velocidad entre 0.5 y 5
    position6 += speed6;

    //Mover el personaje
    char6.style.transform = `translateX(${position6}px)`;

    //Que pare en cierto
    if (position6 < 1234) {
        animationFrame6 = requestAnimationFrame(animate6);
    }

    //Ver el ganador
    if (position6 >= 1234 && !winnerDeclared) {
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
    animate1(); //Iniciar movimiento personaje 1
    animate2(); //Iniciar movimiento personaje 1
    animate3(); //Iniciar movimiento personaje 1
    animate4(); //Iniciar movimiento personaje 1
    animate5(); //Iniciar movimiento personaje 1
    animate6(); //Iniciar movimiento personaje 1
    winnerDeclared = false;
    winnerImage.style.display = "none"; //Ocultar ganador
});

//Reiniciar jugadores, dinero, todo
restartButton.addEventListener('click', () => {
    personaje = 0;
    dineroTotal = dineroTotal + contador;
    dineroMax = dineroTotal;
    contador = 0;

    document.querySelector("#dineroApuesta").innerHTML = contador
    document.querySelector("#dineroTotal").innerHTML = dineroTotal

    //Poner fondo como al inicio
    document.querySelector("#dp1").style.backgroundColor = fondo
    document.querySelector("#dp2").style.backgroundColor = fondo
    document.querySelector("#dp3").style.backgroundColor = fondo
    document.querySelector("#dp4").style.backgroundColor = fondo
    document.querySelector("#dp5").style.backgroundColor = fondo
    document.querySelector("#dp6").style.backgroundColor = fondo


    //Quitar los bordes
    document.querySelector("#dp1").style.border = "none" //Borde
    document.querySelector("#dp2").style.border = "none" //Borde
    document.querySelector("#dp3").style.border = "none" //Borde
    document.querySelector("#dp4").style.border = "none" //Borde
    document.querySelector("#dp5").style.border = "none" //Borde
    document.querySelector("#dp6").style.border = "none" //Borde

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
    winnerDeclared = false;
    winnerImage.style.display = "none"; //Ocultar ganador
});


//Ver quien es el ganador
function declareWinner(ganador) {
    winnerDeclared = true;
    winnerImage.style.display = "block"; //Mostrar la imagen del ganador

    if (personaje == 0) {
        dineroTotal = dineroTotal + contador;
    }

    if (ganador == "char1") {
        winnerImage.src = "Images/GIFS/hueso.gif";
        winnerImage.style.height = "80px"
        if (personaje == 1) {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
        }
        else {
            dineroMax = dineroTotal;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            perdiste();
        }
    }
    else if (ganador == "char2") {
        winnerImage.src = "Images/GIFS/sonic.gif";
        winnerImage.style.height = "80px"
        if (personaje == 2) {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
        }
        else {
            dineroMax = dineroTotal;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            perdiste();
        }
    }
    else if (ganador == "char3") {
        winnerImage.src = "Images/GIFS/mujer.gif";
        winnerImage.style.height = "80px"
        winnerImage.style.paddingRight = "10px"
        if (personaje == 3) {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
        }
        else {
            dineroMax = dineroTotal;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            perdiste();
        }
    }
    else if (ganador == "char4") {
        winnerImage.src = "Images/GIFS/knigth.gif";
        winnerImage.style.height = "80px"
        if (personaje == 4) {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
        }
        else {
            dineroMax = dineroTotal;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            perdiste();
        }
    }
    else if (ganador == "char5") {
        winnerImage.src = "Images/GIFS/hombre_corriendo.gif";
        winnerImage.style.height = "80px"
        if (personaje == 5) {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
        }
        else {
            dineroMax = dineroTotal;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            perdiste();
        }
    }
    else {
        winnerImage.src = "Images/GIFS/mario.gif";
        winnerImage.style.height = "80px"
        if (personaje == 6) {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
        }
        else {
            dineroMax = dineroTotal;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            perdiste();
        }
    }
}

//PREMIO APUESTA
function apuesta() {

    if (personaje == 1) {
        if (ganador == "char1") {
            dineroTotal += contador * 2;
            dineroMax = dineroMax + contador;
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador

        }
        else {
            dineroMax = dineroMax - contador;
            dineroTotal = dineroTotal / 2;
            contador = 0;
            document.querySelector("#dineroApuesta").innerHTML = contador
            document.querySelector("#dineroTotal").innerHTML = dineroTotal
        }
    }
}


//PERDISTE
function perdiste() {
    if (dineroTotal == 0) {
        window.alert("HAS PERDIDO. Reinicia la pagina para empezar de nuevo")
    }
}
