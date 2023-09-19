var nota
var media = 0
var quant = parseInt(prompt(`Quantas notas serão cadastras? `));

for (let i = 1 ; i <= quant ; i++) {
    nota = parseFloat(prompt(`Informe a ${i}ª nota :`));
    media += nota / quant
}
console.log(`A média do aluno é: ${media.toFixed(2)}`);
