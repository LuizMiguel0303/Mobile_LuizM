function reverter(array) {
    let reverso = [];
    let tamanho = array.length;
    for (let i = tamanho - 1; i >= 0; i--) {
        reverso.push(array[i]);
    }
    return reverso;
}
console.log(reverter([1, 2, 3, 4, 5, 6]));
