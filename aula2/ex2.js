const input = require('readline-sync');

function ehPar(numero) {
  return numero % 2 === 0;
}

const numero = Number(input.question("Digite um numero: "));

if (ehPar(numero)) {
      console.log("O numero e par.");
} else {
      console.log("O numero e impar.");
}
