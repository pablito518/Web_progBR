
//Função teste
function saudacao(){
    return "Olá Mundo!";
}

var s = saudacao();
//Aqui, a variável x se transformou em uma função
var x = saudacao;

console.log(s);

//Logo, executar x() ou saudacao() é a mesma coisa.
console.log(x());


//Função anônima
var media = function(n1,n2){

    return (n1,n2) / 2;
}

console.log(media(5,6));

/* var m = media(5,6);
console.log(m);*/





/*
function media(n1,n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}

var resultado = media(6,7);
var m = media;

var resultado2 = m(2,3);

console.log(resultado2);
console.log(resultado + " E " + resultado2);*/


