


//Criando objeto diretamente
var a = {
    nome: "Igor",
    sobrenome: "Oliveira"
}

console.log(a);
/* ----------------------------- */

//Criando objeto com função
function obj(n, s){
    return{nome: n, sobrenome: s}
}

var b = obj("Igor", "Oliveira");

console.log(b);
/* ----------------------------- */

//Criando objeto com um construtor
function objeto(n, s){
    this.nome = n, 
    this.sobrenome = s
}

var c = new objeto("Igor", "Oliveira");

console.log(c);