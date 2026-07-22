const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
  { nome: "Pendrive", preco: 40 }
];

for (const produto of produtos) {
  console.log(produto.nome, produto.preco);
}
