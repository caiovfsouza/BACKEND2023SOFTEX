import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";

const listaVeiculos = new Array<Veiculo>();
const carroModelo = new Carro(`Toro` , `Fiat` , `Preto` , 4 , 5);
listaVeiculos.push(carroModelo);
const motoModelo = new Moto(`Fan` , `Honda` , `Vermelho` , 2 , 150);
listaVeiculos.push(motoModelo);

//Criando os clones:
let cloneCarro1 = carroModelo.clone(`Etios` , `Toyota` , `Cinza` , 4 , 5);
listaVeiculos.push(cloneCarro1);
let cloneCarro2 = carroModelo.clone(`Picanto` , `Kia` , `Preto` , 4 , 5);
listaVeiculos.push(cloneCarro2);
let cloneMoto1 = motoModelo.clone(`Factor` , `Yamaha` , `Preto` , 2 , 150);
listaVeiculos.push(cloneMoto1);
let cloneMoto2 = motoModelo.clone(`EV1` , `Voltz` , `Vermelho` , 2 , 80);
listaVeiculos.push(cloneMoto2);

//Não foi criado um array de clones, pois já utilizamos clone para criar a listaVeiculos
//console.log(listaVeiculos);
listaVeiculos.forEach(element => {
    console.log(element.toString())});