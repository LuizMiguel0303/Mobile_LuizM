function classificar(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(`Nota 8.5: ${classificar(8.5)}`);
console.log(`Nota 5.5: ${classificar(5.5)}`);
console.log(`Nota 3.0: ${classificar(3.0)}`);
