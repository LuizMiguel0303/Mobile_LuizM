const input11 = require("readline-sync");

function podeVotar(idade) {
    return idade >= 16;
}

let idade11 = input11.questionInt("Idade: ");
if (podeVotar(idade11)) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}
