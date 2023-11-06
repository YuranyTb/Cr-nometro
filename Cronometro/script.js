let hr = mn = sg = ms = "0" + 0, iniciarTiempo;

const botonIniciar = document. querySelector(".iniciar");
const botonDetener = document.querySelector(".detener");
const botonReiniciar = document.querySelector(".reiniciar");

botonIniciar.addEventListener("click", iniciar);/*Sonido*/
botonDetener.addEventListener("click", detener);
botonReiniciar.addEventListener("click", reiniciar);

function iniciar() {
    botonIniciar.classList.add("on");
    
    iniciarTiempo = setInterval(() =>{ /*Guardar el intervalo de iniciarTiempo, refrescar tiempo*/
        ms++; /*Van a sumar en uno en uno*/
        ms = ms <10 ? "0" + ms : ms;/*Si ms es menor a 10, agregre un 0 a la izquierda, de lo contrario dejelo como esta*/

        if (ms==100) {/*Cuando los ms lleguen a 100, los segundos deben empezar a sumarse de uno en uno*/
            sg++;
            sg = sg <10 ? "0" + sg : sg;
            ms = "0" + 0;/*Deben volver a 0 los mg, para reiniciarse correctamente*/
        }

        if (sg==60) {/*Cuando los sg lleguen a 60, los minutos deben empezar a sumarse de uno en uno*/
            mn++;
            mn = mn <10 ? "0" + mn : mn;
            sg = "0" + 0;
        }

        if (mn==60) {
            hr++;
            hr = hr <10 ? "0" + hr : hr; 
            mn = "0" + 0;
        }
        ingresarValor();


    }, 10);/*10*100 = 1000 milisegundos que equivale a 1 segundo / Refresca cada segundo*/
}

function detener (){
    botonIniciar.classList.remove("on");/*Remueve la clase, me habilita la clase llamada*/
    clearInterval(iniciarTiempo); /*Limpie el boton, detiene y activa el boton donde quedo*/
}  

function reiniciar (){
    botonIniciar.classList.remove("on");/*Remover la clase para que el boton quede activa*/
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = "0" + 0;
    ingresarValor();
}

function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms; /*Insertar todas estas funciones en el HTML*/
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = ms;
    document.querySelector('.hora').innerHTML = hr;
}
