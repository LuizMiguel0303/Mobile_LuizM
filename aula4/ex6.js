const palavras = ["casa", "computador", "sol", "janela", "livro", "flor"];

const resultado = palavras
    .filter(palavra => palavra.length > 4)
    .map(palavra => palavra.toUpperCase());

console.log(resultado);
