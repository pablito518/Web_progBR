

/*
function calcMedia (n1, n2){
    return (n1 * 2 + n2) / 3;
}
*/
function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2;
}

var CalcMedia = function(){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Igor",
    notas: [5,8],

    media: calcMedia
}


var aluno1 = {
    nome: "Joao",
    notas: [8,8],

    media:CalcMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())