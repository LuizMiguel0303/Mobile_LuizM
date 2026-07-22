const readline = require("readline-sync");

let quantidade = Number(readline.question("Quantos numeros? "));
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    numeros.push(Number(readline.question(Numero ${i + 1}: )));
}

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Maior valor:", maior);
