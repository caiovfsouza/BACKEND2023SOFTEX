import { Calculadora } from "./calculadora";
import { operacao } from "./funcaoOperacao";

const readlineSync = require('readline-sync');

const num1 = readlineSync.questionInt(`Digite o primeiro número: `);
const num2 = readlineSync.questionInt(`Digite o segundo número: `);

const operacaoEscolhida = operacao();
const calculadora = new Calculadora(operacaoEscolhida);

const resultado = calculadora.calcular(num1, num2);

console.log(`O resultado da operação é: ${resultado}`);
