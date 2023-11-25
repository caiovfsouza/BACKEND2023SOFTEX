import { Pato } from "./interfacePato";

export class PatoMarreco implements Pato {
    grasnar(): void {
        console.log("Quack! Quack!");
    }

    nadar(): void {
        console.log("Nadando...");
    }
}