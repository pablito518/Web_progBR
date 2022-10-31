let pessoas = ["Pablo", "João", "Maria", "José", "Lisa", "Jonathan", "Joseph", "Jolyne"]

function sortear(){
    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);

    //let ns = Math.round(Math.random() * np);
    document.getElementById("d").innerHTML = pessoas[ns];
}