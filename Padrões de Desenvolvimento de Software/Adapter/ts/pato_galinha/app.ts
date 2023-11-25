import { Pato } from "./interfacePato";
import { Galinha } from "./interfaceGalinha";
import { GalinhaCaipira } from "./classeGalinhaCaipira";
import { PatoMarreco } from "./classePatoMarreco";
import { AdaptadorPato } from "./adaptadorPato";
import { AdaptadorGalinha } from "./adaptadorGalinha";


class AdaptadorPatoDemo {
    static main() {
        const patoMarreco: Pato = new PatoMarreco();

        const adaptadorPato: Galinha = new AdaptadorPato(patoMarreco);

        const galinhaCaipira: Galinha = new GalinhaCaipira()

        const adaptadorGalinha: Pato = new AdaptadorGalinha(galinhaCaipira);

        console.log("Pato marreco agindo como uma galinha:");
        adaptadorPato.cacarejar();
        adaptadorPato.voar();

        console.log("Galinha caipira agindo como um pato:");
        adaptadorGalinha.grasnar();
        adaptadorGalinha.nadar();
    }
}

AdaptadorPatoDemo.main();