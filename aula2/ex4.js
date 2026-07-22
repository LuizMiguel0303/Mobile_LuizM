const input = require('readline-sync');

function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero!";
    }
    return a / b;
}

const x = Number(input.question("Primeiro numero: "));
const y = Number(input.question("Segundo numero: "));

console.log("Soma:", soma(x, y));
console.log("Subtracao:", subtrai(x, y));
console.log("Multiplicacao:", multiplica(x, y));
console.log("Divisao:", divide(x, y));
