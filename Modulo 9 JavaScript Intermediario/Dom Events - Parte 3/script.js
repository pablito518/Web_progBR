/*function loaded(){
    let t = document.getElementById("titulo");
    t.innerHTML = "rrr";
}*/

function loaded(){
    let t = document.getElementById("titulo");
    //t.onclick = changeText;

    t.addEventListener("mouseover", changeText);
    t.addEventListener("mouseout", mouseOut);
}

function changeText(){
    this.innerHTML = "Novo Texto";
}

function mouseOut(){
    this.innerHTML = "Mouse fora do elemento";
}