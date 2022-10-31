

//Criando o objeto diretamente com função
/*
function criarAluno(_nome, n1, n2){
    return {
        nome: _nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma =[ 
    criarAluno("Igor", 9,6),
    criarAluno("João", 7,4),
    criarAluno("Marcela", 8, 7.5)
]
var aluno = turma[0];

turma.forEach(function(elemento){
    console.log(elemento)
})
*/


//Criando o objeto com uma função - construtor
function aluno(nome,n1,n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    
    this.media = function(){
        return (this.nota1 + this.nota2) /2;
    }
}

//Instanciando o objeto
var a = new aluno("Igor", 8, 7);

console.log(a);


















