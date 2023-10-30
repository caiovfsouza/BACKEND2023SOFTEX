import { Produto } from "./produto";
import { PC } from "./pc";
import { Server } from "./server";
import { NullProduto } from "./null";

export class ProdutoFactory {
    static getProduto(type: string, ram: number , ssd: number, cpu: number) : Produto {
        switch (type.toLowerCase()) {
            case `pc`:
                return new PC(type, ram, ssd, cpu);
            case `servidor`:
                return new Server(type, ram, ssd, cpu);
            default :
                return new NullProduto ();
        }
    }
}
