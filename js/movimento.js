let jogador = document.getElementById("jogador");

let onMouseMove = (e) =>{
    jogador.style.left = e.pageX + "px";
    jogador.style.top = e.pageY + "px";
}

document.addEventListener("mousemove", onMouseMove);

let alteracao = document.getElementById("start");
let parede = document.getElementById("paredes");
let cursor = document.getElementById("cursor")

function play() {
    alteracao.style.display = "none";
    parede.style.display = "flex"
    cursor.style.cursor = "none"
}

document.getElementById("paredes").addEventListener("mouseover", gameover)

function gameover() {
   let fimdejogo = document.getElementById("fimdejogo");
   fimdejogo.style.display = "flex";
   parede.style.display = "none";
   cursor.style.cursor = "context-menu"
}