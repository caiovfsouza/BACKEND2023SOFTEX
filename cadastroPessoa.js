var conti , nome , idade , salario , salarioReal , diploma , temDiploma;

do {
    nome = prompt(`Informe o nome da pessoa: `); //string

    idade = parseInt(prompt(`Informe a idade de ${nome}: `)); //number

    salario = parseFloat(prompt(`Informe o salário de ${nome}: `)); //number

    salarioReal = Intl.NumberFormat(`pt-BR` , {style: `currency` , currency: `BRL`}).format(salario); //number

    temDiploma = prompt(`${nome} possui diploma? `); //string

    diploma = (temDiploma === `Sim` || temDiploma === `sim` || temDiploma === `SIM`) ? `Sim` : `Não`; //string

    console.log(`\n\tNome: ${nome} \n\tIdade: ${idade} anos \n\tSalário: ${salarioReal} \n\tPossui diploma? ${diploma} \n`);

    conti = prompt(`Deseja continuar? Sim|Não `); //string

} while (conti === `Sim` || conti === `sim` || conti === `SIM` );
