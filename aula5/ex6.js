const turma = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carlos", nota: 7 },
  { nome: "Daniela", nota: 9 },
  { nome: "Eduardo", nota: 6 }
];

const aprovados = turma.filter(aluno => aluno.nota >= 6);

console.log("Aprovados:");
aprovados.forEach(aluno => console.log(aluno.nome));

const media =
  turma.reduce((soma, aluno) => soma + aluno.nota, 0) / turma.length;

console.log("Média da turma:", media);

const acimaDaMedia = turma.filter(aluno => aluno.nota > media);

console.log("Quantidade acima da média:", acimaDaMedia.length);
