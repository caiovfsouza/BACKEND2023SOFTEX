export class Banco {
    constructor(cliente, cpf, conta, agencia, saldo, tipoConta) {
        this.cliente = cliente.toUpperCase();
        this.cpf = cpf;
        this.conta = conta;
        this.agencia = agencia;
        this.saldo = saldo;
        this.tipoConta = tipoConta.toUpperCase();
    };

    buscarSaldo() {
        console.log(`\nSALDO DISPONÍVEL \t\t\t${this.saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}\n`); 
    };
    depositar(deposito) {
        this.deposito = deposito;
        this.saldo += this.deposito;
        console.log(`${new Date().toLocaleDateString()} \t\tDEPÓSITO \t+ ${this.deposito.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}`);

    };
    sacar(saque) {
        this.saque = saque;
        this.saldo -= this.saque;
        console.log(`${new Date().toLocaleDateString()} \t\tSAQUE \t\t- ${this.saque.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}`);
    };
    infoConta() {
        console.log(`\n${this.tipoConta}\nAGÊNCIA: ${this.agencia} | CONTA: ${this.conta}\nCLIENTE: ${this.cliente} | CPF: ${this.cpf}\n`);
    };
}