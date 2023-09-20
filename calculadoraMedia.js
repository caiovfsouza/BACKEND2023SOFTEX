var a, b, c = false;
var nota = 0;
var media = 0;
var quant, escolha;

do {
  do {
    quant = parseInt(prompt(`Quantas notas serão cadastradas? `));

    if (!isNaN(quant) && quant !== 0) {
      a = true;
    } else {
      a = false;

      console.error(`Opção inválida... Tente novamente!`);
    }
  } while (a == false);

  for (let i = 1; i <= quant; i++) {
    do {
      nota = parseFloat(prompt(`Informe a ${i}ª nota: `));

      if (nota >= 0 && nota <= 10 && !isNaN(nota)) {
        b = true;

        media += nota / quant;
      } else {
        b = false;

        console.error(`Opção inválida... Tente novamente!`);
      }
    } while (b == false);
  }

  console.log(`A média do aluno é: ${media.toFixed(2)}`);

  do {
    escolha = prompt(`Deseja continuar? Sim|Não -> `);

    if (escolha === `Sim` || escolha === `sim` || escolha === `SIM`) {
      c = false;
    } else {
      c = true;
    }
  } while (c == false);
} while (c == false);
