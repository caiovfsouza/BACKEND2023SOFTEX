import { Galinha } from "./interfaceGalinha";

export class GalinhaCaipira implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voar(): void {
        console.log("Voando...");
    }
}