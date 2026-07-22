const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
  { nome: "Pendrive", preco: 40 }
];

const nomes = produtos
  .filter(produto => produto.preco > 50)
  .map(produto => produto.nome);

console.log(nomes);
