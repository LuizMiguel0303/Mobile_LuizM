const readline = require("readline-sync");

let notas = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let nota = Number(readline.question(Nota ${i + 1}: ));
    notas.push(nota);
    soma += nota;
}

let media = soma / 5;

console.log("Media:", media);

let acima = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acima++;
        console.log(Nota: ${notas[i]} - Posicao: ${i});
    }
}

console.log("Quantidade acima da media:", acima); 
