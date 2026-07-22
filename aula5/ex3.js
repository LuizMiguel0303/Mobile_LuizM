const produto = {
  nome: "Mouse",
  preco: 80,

  mostrar() {
    console.log(Produto: ${this.nome} - Preço: R$ ${this.preco});
  }
};

produto.mostrar();
