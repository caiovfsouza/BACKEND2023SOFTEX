import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
    private numeroPortas : number;

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas)
        this.numeroPortas = numeroPortas;
    
    }
    public override clone(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas?: number) : Veiculo{
        const dolly = Object.create(this);
        dolly.modelo = modelo;
        dolly.marca = marca;
        dolly.cor = cor;
        dolly.numeroRodas = numeroRodas;
        dolly.numeroPortas = numeroPortas;
        return dolly;
    }
    public override toString() : string{
        return `Carro - Modelo: ${this.modelo} | Marca: ${this.marca} | Cor: ${this.cor} | Quantidade de Rodas: ${this.numeroRodas} | Quantidade de Portas: ${this.numeroPortas}.`
    }
}