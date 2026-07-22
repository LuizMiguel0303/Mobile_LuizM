const input = require('readline-sync');

function ehPrimo(n) {
    if (n < 2) return false;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const N = Number(input.question("Digite um numero: "));

for (let i = 2; i <= N; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}
