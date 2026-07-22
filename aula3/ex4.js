const readline = require("readline-sync");

let quantidade = Number(readline.question("Quantos numeros? "));
let numeros = [];
let pares = 0;

for (let i = 0; i < quantidade; i++) {
    let numero = Number(readline.question(Numero ${i + 1}: ));
    numeros.push(numero);

    if (numero % 2 === 0) {
        pares++;
    }
}

console.log("Quantidade de pares:", pares);
