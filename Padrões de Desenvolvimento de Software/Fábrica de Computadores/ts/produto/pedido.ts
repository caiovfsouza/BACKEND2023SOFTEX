import { ProdutoFactory } from "./produtofactory";

const PEDIDO1 = ProdutoFactory.getProduto(`SERVIDOR`, 32, 512, 3.8);
const PEDIDO2 = ProdutoFactory.getProduto(`PC`, 16, 512, 3.2);
const PEDIDO3 = ProdutoFactory.getProduto(`TABLET`, 512, 0, 0);
const PEDIDO4 = ProdutoFactory.getProduto(`CELULAR`, 128, 0, 0)


console.log(PEDIDO1.toString());
console.log(PEDIDO2.toString());  
console.log(PEDIDO3.toString());
console.log(PEDIDO4.toString());
