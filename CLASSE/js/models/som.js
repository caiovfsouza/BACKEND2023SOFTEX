// Objeto Material 2
    export class Som {
    constructor(marca, modelo, ano, dono) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.dono = dono;
    }
    ligar() {
        console.log(`Som ${this.marca}, de ${this.dono}, está ligado.`);
    }
    desligar() {
        console.log(`Som ${this.marca}, de ${this.dono}, está desligado.`);
    }
    conectarBlue() {
        console.log(`Som ${this.marca}, de ${this.dono}, está conectado ao bluetooth.`);
    }
    desconectarBlue() {
        console.log(`Som ${this.marca}, de ${this.dono}, está desconectado do bluetooth.`);
    }
}