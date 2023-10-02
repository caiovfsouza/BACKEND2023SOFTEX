var num1, num2, op, continua;
var a,
  b,
  c,
  d = false;

do {
  try {
    function calculadora(num1, num2, op) {
      if (op == `+`) {
        return num1 + num2;
      } else if (op == `-`) {
        return num1 - num2;
      } else if (op == `*`) {
        return num1 * num2;
      } else if (op == `/`) {
        return parseFloat(num1 / num2);
      } else {
        return;
      }
    }
    do {
      try {
        num1 = parseFloat(prompt(`Informe o primeiro número: `));
        if (isNaN(num1) || num1 === ``) {
          a = false;
          throw new Error(`Opção inválida! Insira um número válido!`);
        } else {
          a = true;
        }
      } catch (error) {
        a = false;
        console.error(error);
      }
    } while (a == false);
    do {
      try {
        console.log(
          `\n\t+ para SOMAR \n\n\t- para SUBTRAIR \n\n\t* para MULTIPLICAR \n\n\t/ para DIVIDIR \n\n`
        );
        op = prompt(`Operador escolhido: `);
        if (op === `+` || op === `-` || op === `*` || op === `/`) {
          b = true;
        } else {
          b = false;
          throw new Error(`Opção inválida! Insira uma operador válido!`);
        }
      } catch (error) {
        b = false;
        console.log(error);
      }
    } while (b == false);
    do {
      try {
        num2 = parseFloat(prompt(`Informe o segundo número: `));
        if (isNaN(num2) || num2 === ``) {
          c = false;
          throw new Error(`Opção inválida! Insira um número válido!`);
        } else if (op === `/` && num2 === 0) {
          c = false;
          throw new Error(`Não é possível dividir por zero!`);
        } else {
          c = true;
        }
      } catch (error) {
        c = false;
        console.error(error);
      }
    } while (c == false);
  } finally {
    console.log(
      `\nO resultado de ${num1} ${op} ${num2} é igual a ${calculadora(
        num1,
        num2,
        op
      )}.\n`
    );
  }
  continua = prompt(`Deseja fazer outra operação? Sim|Não => `);
  if (
    continua == `Sim` ||
    continua == `sim` ||
    continua == `SIM` ||
    continua == `s`
  ) {
    d = false;
  } else {
    d = true;
  }
} while (d == false);
