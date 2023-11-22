// Interface: Pato
interface Pato {
    grasnar(): void;
    voar(): void;
}

// Classe Concreta: PatoSelvagem
class PatoSelvagem implements Pato {
    grasnar(): void {
        console.log("Quack! Quack!");
    }

    voar(): void {
        console.log("Voando alto!");
    }
}

// Interface: Galinha
interface Galinha {
    cacarejar(): void;
    voarBaixo(): void;
}

// Classe Concreta: GalinhaComum
class GalinhaComum implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voarBaixo(): void {
        console.log("Voando baixo.");
    }
}

// Adaptador: AdaptadorPato
class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar(); // Adaptando o grasnar do pato para o cacarejar da galinha
    }

    voarBaixo(): void {
        this.pato.voar(); // Adaptando o voar do pato para o voar baixo da galinha
    }
}

// Classe de Demonstração: AdaptadorPatoDemo
class AdaptadorPatoDemo {
    static main() {
        // Criando um pato selvagem
        const patoSelvagem: Pato = new PatoSelvagem();

        // Criando um adaptador para o pato selvagem
        const adaptadorPato: Galinha = new AdaptadorPato(patoSelvagem);

        // Usando o adaptador como se fosse uma galinha
        console.log("Pato selvagem agindo como uma galinha:");
        adaptadorPato.cacarejar();
        adaptadorPato.voarBaixo();
    }
}

// Executando a demonstração
AdaptadorPatoDemo.main();


//Neste exemplo, AdaptadorPato permite que um objeto do tipo Pato seja utilizado como se fosse um objeto do tipo Galinha. O método cacarejar do adaptador chama o método grasnar do pato, adaptando o comportamento para parecer com o cacarejar de uma galinha. O método voarBaixo do adaptador chama o método voar do pato, adaptando o comportamento para parecer com o voo baixo de uma galinha. O exemplo finaliza criando um pato selvagem, criando um adaptador para o pato selvagem e usando o adaptador como se fosse uma galinha.