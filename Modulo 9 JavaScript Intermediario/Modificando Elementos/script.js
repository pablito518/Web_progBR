let p = document.getElementById("p1");

//p.innerHTML = "novo conteúdo";

//p.innerText = "Conteúdo mais novo";

//p.textContent = "Conteúdo mais novo ainda";


//p.innerText = "<h2>tem um h3 dentro do p</h2>"

//p.textContent = "<h2>tem um h3 dentro do p</h2>"


//O innerHTML modifica o elemento, criando um h3 de fato, sendo diferente dos outros, que modificam texto
p.innerHTML = "<h3>tem um h3 dentro do p</h3>"


//Mostra o que aparece na tela
console.log(p.innerText);
//output: "Parágrafo 1"

//Mostra o que está no HTML
console.log(p.textContent);
/*output: "Parágrafo 1
            Outro texto"*/


p.className="";

let meuAtt = p.getAttribute("meuAtt");
console.log(meuAtt);

p.setAttribute("meuAtt", "Outro atributo");
console.log(p);

p.setAttribute("novoAtributo", "Qualquer coisa");
