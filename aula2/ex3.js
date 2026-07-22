const input = require('readline-sync');

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function situacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperacao";
    } else {
        return "Reprovado";
    }
}

const n1 = Number(input.question("Nota 1: "));
const n2 = Number(input.question("Nota 2: "));
const n3 = Number(input.question("Nota 3: "));

const media = calcularMedia(n1, n2, n3);

console.log("Media:", media);
console.log("Situacao:", situacao(media));
