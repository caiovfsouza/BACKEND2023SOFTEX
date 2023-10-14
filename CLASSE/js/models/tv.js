// Classe Material 1
    export class Tv {
    constructor(marca, modelo, ano, dono) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.dono = dono;
    }
    ligar() {
        console.log(`TV ${this.marca}, de ${this.dono}, está ligada.`);
    }
    desligar() {
        console.log(`TV ${this.marca}, de ${this.dono}, está desligada.`);
    }
    conectarBlue() {
        console.log(`TV ${this.marca}, de ${this.dono}, está conectada ao bluetooth.`);
    }
    desconectarBlue() {
        console.log(`TV ${this.marca}, de ${this.dono}, está desconectada do bluetooth.`);
    }
}