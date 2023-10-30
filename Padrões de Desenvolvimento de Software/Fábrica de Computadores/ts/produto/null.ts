import { Produto } from "./produto";

export class NullProduto implements Produto {
    
    getType() {
        return ``
    }
    getRam() {
        return 0
    }
    getSsd() {
        return 0
    }
    getCpu() {
        return 0
    }
    toString() {
        return `Produto não cadastrado.`
    }
} 