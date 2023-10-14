import { Respiracao } from "./models/respiracao.js";
import { Som } from "./models/som.js";
import { Tv } from "./models/tv.js";
import { Aroma } from "./models/aroma.js";
import { Dono } from "./models/dono.js";

const nome1 = new Dono(`Caio Souza`, 35, `M`);
const nome2 = new Dono(`Jeferson Cunácia`, 50, `M`);

const respira1 = new Respiracao(`rápido` , 90 , 5 , nome1.toString());
respira1.inspirar();
respira1.expirar();
respira1.segurar();

const respira2 = new Respiracao(`lento` , 50 , 2 , nome2.toString());
respira2.inspirar();
respira2.expirar();
respira2.segurar();

const cheiro1 = new Aroma(`Sândalo` , `Aromê` , 2030 , nome1.toString());
cheiro1.borrifar();
cheiro1.sugar();
cheiro1.verificarValidade();

const cheiro2 = new Aroma(`Chá Verde` , `Pétali` , 2021 , nome2.toString());
cheiro2.borrifar();
cheiro2.sugar();
cheiro2.verificarValidade();

const minhaTv1 = new Tv (`LG` , `UJ5564` , 2023 , nome1.toString());
minhaTv1.ligar();
minhaTv1.desligar();
minhaTv1.conectarBlue();
minhaTv1.desconectarBlue();

const minhaTv2 = new Tv (`Samsung` , `KM7598` , 2022 , nome2.toString());
minhaTv2.ligar();
minhaTv2.desligar();
minhaTv2.conectarBlue();
minhaTv2.desconectarBlue();

const meuSom1 = new Som(`JBL` , `JB1100` , 2023 , nome1.toString());
meuSom1.ligar();
meuSom1.desligar();
meuSom1.conectarBlue();
meuSom1.desconectarBlue();

const meuSom2 = new Som(`Sony` , `SY450` , 2000 , nome2.toString());
meuSom2.ligar();
meuSom2.desligar();
meuSom2.conectarBlue();
meuSom2.desconectarBlue();