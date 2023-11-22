// Interface: Strategy
interface Strategy {
    execute(num1: number, num2: number): number;
}

// Classes Concretas: SomaStrategy, SubtracaoStrategy, MultiplicacaoStrategy
class SomaStrategy implements Strategy {
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class SubtracaoStrategy implements Strategy {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class MultiplicacaoStrategy implements Strategy {
    execute(num1: number, num2: number): number {
        return num1 * num2;
    }
}

// Contexto: Calculadora
class Calculadora {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    calcular(num1: number, num2: number): number {
        return this.strategy.execute(num1, num2);
    }
}

// Uso da Calculadora com input do usuário
const readline = require('readline-sync');

function obterOperacao(): Strategy {
    console.log(`Escolha a operação:`);
    console.log(`1 - Soma`);
    console.log(`2 - Subtração`);
    console.log(`3 - Multiplicação`);

    const opcao = readline.questionInt(`Digite o número da operação desejada: `);

    switch (opcao) {
        case 1:
            return new SomaStrategy();
        case 2:
            return new SubtracaoStrategy();
        case 3:
            return new MultiplicacaoStrategy();
        default:
            throw new Error(`Operação inválida`);
    }
}

const num1 = readline.questionInt(`Digite o primeiro número: `);
const num2 = readline.questionInt(`Digite o segundo número: `);

const operacaoEscolhida = obterOperacao();
const calculadora = new Calculadora(operacaoEscolhida);

const resultado = calculadora.calcular(num1, num2);

console.log(`O resultado da operação é: ${resultado}`);

//Neste exemplo, a interface Strategy define o método execute, e as classes concretas SomaStrategy, SubtracaoStrategy, e MultiplicacaoStrategy implementam essa interface para realizar as operações de soma, subtração e multiplicação, respectivamente. A classe Calculadora é o contexto que possui uma referência para a estratégia atual e utiliza essa estratégia para realizar os cálculos. O método calcular delega a execução da operação para a estratégia correspondente. A função obterOperacao é responsável por receber a escolha do usuário e retornar a estratégia apropriada. No final, o programa instância a Calculadora com a estratégia escolhida pelo usuário e imprime o resultado da operação.