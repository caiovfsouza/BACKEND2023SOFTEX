let animais = [];
let quant = ``;

do {

    quant = prompt(`Quantos animais serão cadastrados? `);
    
        if (isNaN(quant) || (quant < 1) || (quant == ``)) {
            
            alert(`Opção Inválida! Tente novamente.`);
        }

} while (isNaN(quant) || (quant < 1) || (quant == ``));

    for (let i = 1 ; i <= quant ; i++) {

        let animaisAux = [];
        let nome = ``;
        let especie = ``;
        let idade = ``;

        do {

            nome = prompt(`Informe o nome do ${i}º animal: `);

                if (!isNaN(nome) || (nome == ``)) {
                
                    console.log(`Opção inválida. Tente novamente.`);
            
                }
        
        } while (!isNaN(nome) || (nome == ``));
    
        do {

            especie = prompt(`Informe a espécie do ${i}º animal: `);

                if (!isNaN(especie) || (especie == ``)) {
                
                    console.log(`Opção inválida. Tente novamente.`)

            }

        } while (!isNaN(especie) || (especie == ``));

        do {

            idade = prompt(`Informe a idade do ${i}º animal: `);

                if (isNaN(idade) || (idade < 1) || (idade == ``)) {

                    console.log(`Opção inválida. Tente novamente.`);

                }

        } while (isNaN(idade) || (idade < 1) || (idade == ``));

        animaisAux.push(nome , especie , idade);

        animais.push(animaisAux);

    }


console.table(animais);
