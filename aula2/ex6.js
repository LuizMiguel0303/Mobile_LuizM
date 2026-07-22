const input = require('readline-sync');

function fatorial(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

const n = Number(input.question("Digite um numero: "));
console.log("Fatorial:", fatorial(n));
