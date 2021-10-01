let jogador = document.getElementById("jogador");
let alteracao = document.getElementById("start");
let parede = document.getElementById("paredes");
let cursor = document.getElementById("cursor")
let final = document.getElementById("paredevencedora")
let buttaowin = document.getElementById("winbutton")
let win = document.getElementById("win")

function play() {
    alteracao.style.display = "none";
    parede.style.display = "block"
    cursor.style.cursor = "none"
    final.style.display = "flex"
}

let onMouseMove = (e) =>{
    jogador.style.left = e.pageX + "px";
    jogador.style.top = e.pageY + "px";
}
document.addEventListener("mousemove", onMouseMove);

function gameover() {
    let fimdejogo = document.getElementById("fimdejogo");
    fimdejogo.style.display = "flex";
    parede.style.display = "none";
    cursor.style.cursor = "context-menu"
}

parede.addEventListener("mouseover", gameover);

function wingame() {
    win.style.display = "block"
    buttaowin.style.display = "flex"
    cursor.style.cursor = "context-menu"
}

final.addEventListener("mouseover", wingame);

function playagain() {
    let fimdejogo = document.getElementById("fimdejogo")
    fimdejogo.style.display = "none"
    parede.style.display = "flex";
    cursor.style.cursor = "none"
    buttaowin.style.display = "none"
    win.style.display = "none"
}
