import { Banco } from "./model/banco.js";

const brasil1 = new Banco(`caio victor f souza` , `123.456.789-10` , `51021-3` , `4598-7` , 0 , `conta corrente`);

brasil1.infoConta();
brasil1.depositar(100);
brasil1.sacar(4.5);
brasil1.depositar(142567)
brasil1.sacar(4568)
brasil1.buscarSaldo();