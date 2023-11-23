class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "Eusousoftex1u2d3t4q5c6s7s8o";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido!");
            console.log("Bem-vindo(a) à Fortaleza Digital, agente.");
        } else {
            console.log("Acesso negado!");
            console.log("ALERTA DE INTRUSO!... ALERTA DE INTRUSO!... ALERTA DE INTRUSO!");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Tentativa de acesso com a senha correta
sistemaSeguranca.acessarBaseSecreta("Eusousoftex1u2d3t4q5c6s7s8o");

// Tentativa de acesso com a senha incorreta
sistemaSeguranca.acessarBaseSecreta("SoftexPernambuco");
