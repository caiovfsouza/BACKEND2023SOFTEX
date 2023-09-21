var num1, num2, op, continua;
var a, b, c , d = false;

do {
  function calculadora(num1, num2, op) {
    if (op == `+`) {
      return num1 + num2;
    } else if (op == `-`) {
      return num1 - num2;
    } else if (op == `*`) {
      return num1 * num2;
    } else if (op == `/`) {
      return parseInt(num1 / num2);
    } else {
      return;
    }
  }

  do {
    num1 = parseInt(prompt(`Informe o primeiro número: `));
    if (isNaN(num1) || num1 === ``) {
      a = false;
      console.error(`Opção inválida! Insira um número válido!`);
    } else {
      a = true;
    }
  } while (a == false);

  do {
    op = prompt(`\n\t+ para SOMAR \n\n\t- para SUBTRAIR \n\n\t* para MULTIPLICAR \n\n\t/ para DIVIDIR \n\nOperador escolhido: `);
    if (op === `+` || op === `-` || op === `*` || op === `/`) {
      b = true;
    } else {
      b = false;
      console.error(`Opção inválida! Insira uma operador válido!`);
    }
  } while (b == false);

  do {
    num2 = parseInt(prompt(`Informe o segundo número: `));
    if (isNaN(num2) || num2 === ``) {
      c = false;
      console.error(`Opção inválida! Insira um número válido!`);
    } else if (op === `/` && num2 === 0) {
      c = false;
      console.error(`Não é possível dividir por zero!`);
    } else {
      c = true;
    }
  } while (c == false);
  
  if (op == `*` || op == `+` || op == `-` || op == `/` && num1 % num2 === 0) {
  console.log(`\nO resultado de ${num1} ${op} ${num2} é igual a ${calculadora(num1, num2, op)}.\n`);
  } else {
  console.log(`\nO resultado de ${num1} ${op} ${num2} é igual a ${calculadora(num1, num2, op)}, e o resto da divisão de ${num1} por ${num2} é ${num1%num2}.\n`);
  }

  continua = prompt(`Deseja fazer outra operação? Sim|Não => `);
  if (continua == `Sim` || continua == `sim` || continua == `SIM` || continua ==`s`) {
    d = false;
  } else {
    d = true;
  }
} while (d == false);
