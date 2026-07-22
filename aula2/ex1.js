const input = require('readline-sync');
function saudacao(nome) {
  return `Ola, ${nome}! Bons estudos.`;
}
const nome = input.question("Digite seu nome: "); console.log(saudacao(nome));
