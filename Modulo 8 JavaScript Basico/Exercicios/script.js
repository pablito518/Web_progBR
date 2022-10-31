//1. Escreva uma função que receba dois números e retorne o maior deles
/*
function retornaMaior(n1,n2){
    if(n1 > n2){
        return n1;
    }
    else{
        return n2;
    }
}

console.log(retornaMaior(3,2));

*/
//2. Escreva uma função que receba um Array com 3 números e imprima eles em ordem

/*
function retornaArray([n1,n2,n3]){
    let array = [n1,n2,n3];
    array.forEach(function(elemento){
        console.log(elemento)
    })
}
retornaArray([8,9,10])
*/

//3. Escreva uma função que receba um Array com 5 números e retorne o maior deles

/*
function retornaMaiorArray([n1,n2,n3,n4,n5]){
    let array = [n1,n2,n3,n4,n5];
    let maior = 0;
    array.forEach(function(elemento){
        if(elemento > maior){
            maior = elemento;
        }
    })
    return maior;
}
console.log(retornaMaiorArray([8,9,10,20,2]))
*/


//4. Escreva uma função que receba um Array com 5 números e retorne a média deles

/*
function retornaMediaArray([n1,n2,n3,n4,n5]){
    let array = [n1,n2,n3,n4,n5];
    let acumulador = 0;
    array.forEach(function(elemento){
    acumulador += elemento;
    })
    return acumulador / 5;
}
console.log(retornaMediaArray([10,5,8,4,6]))
*/


//5. Escreva uma função que receba um número e imprima se ele é par ou ímpar

/*
function imparPar(n1){
    if(n1 % 2 == 0){
        return "Par"
    }
    else{
        return "Impar"
    }
}
console.log(imparPar(5))
*/

//6. Escreva um programa que vá de 0 a 100 
//e imprima o número na tela caso não seja múltiplo de 4. 
//Para cada número que seja múltiplo de 4 imprima "pi" no lugar

/*
for(i=0;i<=100;i++){
    if(i % 4 != 0){
        console.log(i);
    }
    else{
        console.log("pi");
    }
}
*/

//7. Escreva uma função que receba um objeto e imprima suas propriedades

/*
function propriedades(object){
    for(let propriedade in object){
        console.log(propriedade)
    }
}

var pessoa = {nome: "José", idade:35, altura: 1.80}

propriedades(pessoa)
*/

//8. Escreva uma função que receba uma data e retorne um objeto 
//com as propriedades dia, mês e ano Referentes a essa data.

/*
function retornaData(data){
    let Data = new Date(data);
    let _data = {
        dia: Data.getDate(),
        mes: Data.getMonth(),
        ano: Data.getFullYear()
    }
    return _data
}

console.log(retornaData("12/02/2020"))
*/

//9. Escreva um programa que receba um array de objetos com as 
//propriedades altura e idade e imprima: A maior e menor altura e a média da idade

function retornaDados(elemento){
    let maiorAltura = 0;
    let menorAltura = 9999;
    let acu = 0;
    let contador = 0;
    let media = 0;
    elemento.forEach((function(element){
        if(element.altura > maiorAltura){
            maiorAltura = element.altura;
        }
        if(element.altura < menorAltura){
            menorAltura = element.altura;
        }
        acu += element.idade;
        contador++;
    }))
    media = acu / contador;
    console.log("Maior altura: " + maiorAltura)
    console.log("Menor altura: " + menorAltura)
    console.log("Média das alturas: " + media);
    return "terminou";
}

let elementos = [{
    altura: 1,
    idade: 2
}, 
{
    altura: 2,
    idade: 3
},
{
    altura: 10,
    idade: 10
}
]
console.log(retornaDados(elementos))


//10. Escreva um programa que imprima o seguinte padrão
/*
*
* *
* * *
* * * *
* * * * *
*/
function escada(altura){
    for(let i = 1; i <=altura;i++){
        let string = ""
        for(let j =1 ;j<= i; j++){
            string +="* "
        }
        console.log(string)
    }
}
// escada(25)
