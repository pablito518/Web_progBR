var nota1 = 5.0;
var nota2 = 5.8;

var media = (nota1 + nota2)/2;

var conceito = "";

if(media >=8){
    conceito = "Ótimo";
}
else if(media >= 6.5){
    conceito = "Bom";
}
else{
    conceito = "Regular";
}
/*if(media>=7){
    console.log("Você passou com média " + media);
}
else{
    console.log("Sua nota " + media + " não foi o suficiente para passar");
}*/

switch(conceito){
    case "Ótimo":
        console.log("Parabéns! Você é um ótimo aluno!");
    break;

    case "Bom":
        console.log("Você está quase perfeito!");
    break;

    case "Regular":
        console.log("Estude mais um pouco!");
    break;

    default:
        console.log("Houve um erro");
    break;
}