function contarLetra(texto, letra) {
    let qntd = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            qntd++;
        }
    }
    return qntd;
}

let texto10 = "arroz";
let letra10 = "r";
console.log(`Texto: "${texto10}" letra "${letra10}": ${contarLetra(texto10, letra10)} ocorrências`);
