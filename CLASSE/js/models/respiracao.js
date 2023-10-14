// Objeto Astrato 2
    export class Respiracao {
    constructor(frequencia, oxigenio, gasCarbonico , dono) {
        this.frequencia = frequencia;
        this.oxigenio = oxigenio;
        this.gasCarbonico = gasCarbonico;
        this.dono = dono
    }
    inspirar() {
        console.log(`${this.dono} está inspirando muito ${this.frequencia} ${this.oxigenio} % de oxigênio.`);
    }
    expirar() {
        console.log(`${this.dono} está expirando muito ${this.frequencia} ${this.gasCarbonico} % de gás carbônico.`);
    }
    segurar() {
        console.log(`${this.dono} está segurando a respiração.`);
    }
}
