var num1, num2, op, continua;
var a , b , c , d = false;

do {
  function calculadora(num1 , num2 , op) {
    if (op == `+`) {
      return num1 + num2;
    } else if (op == `-`) {
      return num1 - num2;
    } else if (op == `*`) {
      return num1 * num2;
    } else if (op == `/`) {
      return num1 / num2;
    } else {
      return;
    }
  }

  do {
    num1 = parseFloat(prompt(`Informe o primeiro número: `));
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
    }var num1, num2, op, continua;
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
      return num1 / num2;
    } else {
      return;
    }
  }

  do {
    num1 = parseFloat(prompt(`Informe o primeiro número: `));
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
    num2 = parseFloat(prompt(`Informe o segundo número: `));
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

  console.log(`\nO resultado de ${num1} ${op} ${num2} é igual a ${calculadora(num1, num2, op)}.\n`);

  continua = prompt(`Deseja fazer outra operação? Sim|Não => `);
  if (continua == `Sim` || continua == `sim` || continua == `SIM`) {
    d = false;
  } else {
    d = true;
  }
} while (d == false);
  } while (b == false);

  do {
    num2 = parseFloat(prompt(`Informe o segundo número: `));
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

  console.log(`\nO resultado de ${num1} ${op} ${num2} é igual a ${calculadora(num1, num2, op)}.\n`);

  continua = prompt(`Deseja fazer outra operação? Sim|Não => `);
  if (continua == `Sim` || continua == `sim` || continua == `SIM`) {
    d = false;
  } else {
    d = true;
  }
} while (d == false);
