
var aluno = {
    nome: "Joao",
    notas: [7.5, 5.0]
}

console.log(aluno.nome);
console.log(aluno["nome"]);

console.log(aluno.notas[0]);
console.log(aluno["notas"][0]);

//adicionando dados ao objeto aluno mesmo depois de criado

aluno.matricula = 12345;

aluno["sobrenome"] = "Oliveira";

console.log(aluno);

//outra forma de adicionar dados

var novaProp = "sobrenome";

aluno[novaProp] = "Oliveira";

//outra maneira de criar objeto

var aluno = new Object();

aluno.nome = "Igor";
aluno.notas = [8,9];

console.log(aluno)