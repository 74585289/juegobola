//AQUI INVOCAMOS QUE EL EVENTO MOUSEOVER EMPIECE A USAR LA FUNCION "SUMAR PUNTOS" EN LA BOLITA
document.getElementById("bolitaC").addEventListener("mouseover",sumarPuntos);
puntosC = 0;
tiempoC = 50;
necesariosC = 70;
//AQUI PROGRAMAMOS LA FUNCION PARA AUNMENTAR EL PUNTAJE
function sumarPuntos(){
    puntosC++;
    document.getElementById("puntosC").innerHTML = "Puntos:" + " " + puntosC + "/70";
        randNum = Math.round(Math.random()*410)
        randNum2 = Math.round(Math.random()*410)
        // Definimos donde vamos a colocar este comportamiento y lo mostramos en pantalla
        document.getElementById("bolitaC").style.marginTop = randNum + "px";
        document.getElementById("bolitaC").style.marginLeft = randNum2 + "px";
        if(puntosC == 70){
            alert("Felicidades eres el mejor")
            tiempoC = 50;
            puntosC = 0;
        }
}
function restarTiempo(){
    tiempoC--
    document.getElementById("tiempoC").innerHTML = "&nbsp;&nbsp;&nbsptiempo: " + tiempoC;
    if(tiempoC == 0){
        alert("Game Over se acabo el tiempo")
        puntosC = 0;
        tiempoC = 50;
    }
}
setInterval(restarTiempo, 1000);