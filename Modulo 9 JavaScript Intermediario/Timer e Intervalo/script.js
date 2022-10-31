var num = 0;
var interval;

var timer;

function iniciar(){
    interval = setInterval(atualizarTexto, 1000);
//  timer = setTimeout(atualizarTexto, 3000);

}

function parar(){
    clearInterval(interval);
// clearTimeout(timer)
}

function atualizarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += ` ${num}`
    num++;
}
/*function mudarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = "Novo Título";

    setInterval(atualizarTexto, 3000)
}



*/
/*
function mudarCor(){
    let h = document.getElementsByTagName("h1")[0];
    h.style.color = "blue";
}*/