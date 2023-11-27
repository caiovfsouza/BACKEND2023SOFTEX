import { Observer } from "./observer";

export class Loja {
    private nome: string;
    private categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    publicarNovoProjeto(text : string) {
        Observer.publicarSpam(text);
    }
    
}
