const readline = require("readline-sync");

let quantidade = Number(readline.question("Quantos numeros deseja digitar? "));
let numeros = [];
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    let numero = Number(readline.question(Numero ${i + 1}: ));
    numeros.push(numero);
    soma += numero;
}

let media = soma / quantidade;

console.log("Soma:", soma);
console.log("Media:", media);
