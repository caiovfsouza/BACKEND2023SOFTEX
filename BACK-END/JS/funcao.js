const prompt = require(`prompt-sync`)();

function inicio() {
    console.log(`\nBem-vindo(a) a Jeff's Bakery!`);
  }
  
  function quanti(quant) {
    const listaP = [];
    const pedP = {
      sabor: ``,
      tamanho: ``,
      valor: function valores() {
        var val;
        if (pedP.sabor == `Calabresa` && pedP.tamanho == `Grande`) {
          val = 35.0;
        } else if (pedP.sabor == `Azeitona` && pedP.tamanho == `Grande`) {
          val = 35.0;
        } else if (pedP.sabor == `Tomate Seco` && pedP.tamanho == `Grande`) {
          val = 40.0;
        } else if (pedP.sabor == `Parmesão` && pedP.tamanho == `Grande`) {
          val = 40.0;
        } else if (pedP.sabor == `Calabresa` && pedP.tamanho == `Piccolo`) {
          val = 20.0;
        } else if (pedP.sabor == `Azeitona` && pedP.tamanho == `Piccolo`) {
          val = 20.0;
        } else if (pedP.sabor == `Tomate Seco` && pedP.tamanho == `Piccolo`) {
          val = 22.5;
        } else if (pedP.sabor == `Parmesão` && pedP.tamanho == `Piccolo`) {
          val = 22.5;
        } else {
          val = 0.0;
        }
        return val;
      },
    };
    var a,
      b = false;
    for (let i = 1; i <= quant; i++) {
      console.clear();
      do {
        console.log(
          `Escolha o sabor do ${i}º pão:\n\n(1) Calabresa\n(2) Azeitona\n(3) Tomate Seco\n(4) Parmesão\n`
        );
        pedP.sabor = parseInt(prompt(`Sabor escolhido: `));
        if (pedP.sabor == 1) {
          a = true;
          pedP.sabor = `Calabresa`;
        } else if (pedP.sabor == 2) {
          a = true;
          pedP.sabor = `Azeitona`;
        } else if (pedP.sabor == 3) {
          a = true;
          pedP.sabor = `Tomate Seco`;
        } else if (pedP.sabor == 4) {
          a = true;
          pedP.sabor = `Parmesão`;
        } else {
          a = false;
          console.error(`\nOpção inválida! Tente novamente.\n`);
        }
      } while (a == false);
      do {
        console.log(
          `\nEscolha o tamanho do ${i}º pão:\n\n(1) Grande\n(2) Piccolo\n`
        );
        pedP.tamanho = parseInt(prompt(`Tamanho escolhido: `));
        if (pedP.tamanho == 1) {
          b = true;
          pedP.tamanho = `Grande`;
        } else if (pedP.tamanho == 2) {
          b = true;
          pedP.tamanho = `Piccolo`;
        } else {
          b = false;
          console.error(`\nOpção inválida! Tente novamente.\n`);
        }
      } while (b == false);
      console.clear();
      listaP.push({
        id: i,
        sabor: pedP.sabor,
        tamanho: pedP.tamanho,
        preco: pedP.valor(),
      });
    }
    return listaP;
  }
  
  function fim() {
    console.log(`\nObrigado pela preferência!\n`);
  }
  var c,
    d = false;
  inicio();
  do {
    var nome = prompt(`Por gentileza, informe o seu nome: `);
    if (isNaN(nome)) {
      c = true;
    } else {
      c = false;
      console.error(`Opção inválida! Tente novamente.`);
    }
  } while (c == false);
  do {
    var quant = parseInt(
      prompt(`Quantos pães você gostaria de encomendar, ${nome}? `)
    );
    if (!isNaN(quant)) {
      d = true;
      var escolhaP = quanti(quant);
      console.log(
        `\nRESUMO DO PEDIDO DE ${nome.toUpperCase()}:\n\n`,
        escolhaP,
        `\n\nQuantidade de pães: `,
        quant
      );
      const data = escolhaP
        .map((item) => item.preco)
        .reduce((anterior, atual) => anterior + atual, 0);
  
      const total = data.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      console.log(`\nTotal:`, total);
    } else {
      d = false;
      console.error(`Opção inválida! Tente novamente.`);
    }
  } while (d == false);
  fim();