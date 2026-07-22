function ranger(inicio, fim) {
    let array = [];
    for (let i = inicio; i <= fim; i++) {
        array.push(i);
    }
    return array;
}

function somar13(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

const numeros13 = ranger(1, 10);
const resultado13 = somar13(numeros13);
console.log(resultado13);
