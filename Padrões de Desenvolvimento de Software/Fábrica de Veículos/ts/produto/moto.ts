import { Veiculo } from "./veiculo";

export class Moto extends Veiculo {
    private cilindrada : number

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, cilindrada: number) {
        super(modelo, marca, cor, numeroRodas)
        this.cilindrada = cilindrada
    
    }

    public override clone(modelo: string, marca: string, cor: string, numeroRodas: number, cilindrada?: number) : Veiculo{
        const dolly = Object.create(this);
        dolly.modelo = modelo;
        dolly.marca = marca;
        dolly.cor = cor;
        dolly.numeroRodas = numeroRodas;
        dolly.cilindrada = cilindrada;
        return dolly;
    }
    public override toString() : string {
        return `Moto - Modelo: ${this.modelo} | Marca: ${this.marca} | Cor: ${this.cor} | Quantidade de Rodas: ${this.numeroRodas} | Cilindradas: ${this.cilindrada}.`
    }
}