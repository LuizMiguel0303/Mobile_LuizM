let calcular = (a, b, operacao) => operacao(a, b);
let soma12 = (a, b) => a + b;
let subtrair = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

console.log(calcular(10, 5, soma12));
console.log(calcular(10, 5, subtrair));
console.log(calcular(10, 5, multiplicar));
console.log(calcular(10, 5, dividir));
