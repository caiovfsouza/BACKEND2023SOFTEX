// Objeto Astrato 1
    export class Aroma {
    constructor(sabor, marca, validade, dono) {
        this.sabor = sabor;
        this.marca = marca;
        this.validade = validade;
        this.dono = dono;
    }
    borrifar() {
        console.log(`O perfume com fragrância de ${this.sabor}, da marca ${this.marca}, foi borrifado em ${this.dono}.`);
    }
    sugar() {
        console.log(`O perfume com fragrância de ${this.sabor}, da marca ${this.marca}, foi sugado de ${this.dono}.`);
    }
    verificarValidade() {
        if (this.validade >= new Date().getFullYear()) {
            console.log(`O perfume com fragrância de ${this.sabor}, da marca ${this.marca}, está na validade.`);
        } else {
            console.log(`O perfume com fragrância de ${this.sabor}, da marca ${this.marca}, não está na validade.`);
        }
    }
}