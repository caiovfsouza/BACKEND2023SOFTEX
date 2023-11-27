import { Cliente } from "./cliente";
import { Loja } from "./loja";
import { Observer } from "./observer";

const JOAO = new Cliente(`João Vitor` , `jvm@softex.com.br`);
const RODRIGO = new Cliente(`Rodrigo Duarte` , `rds@softex.com.br`);
const THIAGO = new Cliente(`Thiago Jomar` , `tjf@softex.com.br`);

const NADJAIMPORTS = new Loja(`Nadja Imports` , `Muamba`);

Observer.addCliente(JOAO);
Observer.addCliente(RODRIGO);
Observer.addCliente(THIAGO);

NADJAIMPORTS.publicarNovoProjeto(`Iphone 15 Pro Max 512GB - R$ 15.000,00`);
NADJAIMPORTS.publicarNovoProjeto(`Iphone 15 Pro Max 512GB - R$ 15.000,00`);