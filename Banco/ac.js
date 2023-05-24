// Luana Gomes da Silva RM 14883
// Mariana Ayumi Borges Kitsuse RM 15030
// Piettra Boschini Sattolo RM 15460
class Conta {
    constructor(numero, cpf, saldo, ativo) {
      this.numero = numero;
      this.cpf = cpf;
      this.saldo = saldo;
      this.ativo = ativo;
    }
  
    ativar() {
      this.ativo = true;
    }
  
    credito(valor) {
      if (this.ativo) {
        if (valor < 0) {
          console.log("Impossivel realizar, valor negativo");
        } else if (valor == 0) {
          console.log("Impossivel realizar, valor zerado...");
        } else {
          this.saldo += valor;
        }
      } else {
        console.log("Conta inativa....");
      }
    }
  
    debito(valor) {
      if (this.ativo) {
        if (valor < 0) {
          console.log("Impossivel realizar, valor negativo...");
        } else if (valor == 0) {
          console.log("Impossivel realizar, valor zerado...");
        } else if (valor > this.saldo) {
          console.log("Impossivel realizar, saldo indisponivel...");
        } else {
          this.saldo -= valor;
        }
      } else {
        console.log("Conta inativa...");
      }
    }
  }
  
  //Mariana Ayumi Kitsuse Borges RM 14883
  class ContaPoupanca extends Conta {
    constructor(numero, cpf, saldo, ativo, diaAniversarioPoupanca) {
      super(numero, cpf, saldo, ativo);
      this.diaAniversarioPoupanca = diaAniversarioPoupanca;
    }
    correcao(dia) {
      if (this.diaAniversarioPoupanca == dia) {
        this.credito = this.saldo * 0.05;
        console.log("Sua conta foi corrigida");
      } else {
        console.log("Não é a data de correção da sua conta");
      }
    }
  }
  
  //Luana Gomes da Silva RM 14883
  class contaCorrente extends Conta {
    constructor(numero, cpf, saldo, ativo, contarTalao) {
      super(numero, cpf, saldo, ativo);
      this.contarTalao = contarTalao;
    }
  
    pediTalao() {
      if (numeroDeTaloes < 0) {
        console.log(
          "não é possível solicitar uma quantidade de Talões menor que 0"
        );
      } else if (numeroDeTaloes == 0) {
        console.log("Você selecionou 0 talões");
      } else if (numeroDeTaloes > 3) {
        console.log("A quantidade solicitada é maior do que o disponível");
      } else if (numeroDeTaloes * 30 > this.saldo) {
        console.log(
          "Você não tem saldo o suficiente para pagar pela quantidade de Talões solicitada"
        );
      } else {
        super.debito(numeroDeTaloes * 30);
        console.log("Vamos emitir os Talões agora...");
        this.contarTalao = this.contarTalao - numeroDeTaloes;
        console.log("Talões disponíveis: " + this.contarTalao);
      }
    }
  }
  // Piettra Boschini Sattolo RM 15460
  class contaEspecial extends Conta {
    constructor(numero, cpf, saldo, ativa, limite) {
      super(numero, cpf, saldo, ativa);
      this.limite = limite;
    }
  
    usarLimite(valor) {
      if (valor > this.limite) {
        console.log("Impossível realizar, limite indisponivel.");
      } else {
        this.limite = this.limite - valor;
        this.credito(valor);
      }
      console.log("Limite atual: " + this.limite);
      console.log("Seu saldo atual: " + this.saldo);
    }
  }
  
  // PROGRAMA PRINCIPAL
  const leia = require("prompt-sync")();
  
  let op = "";
  
  // variavel poupança
  let dia = "";
  
  let opcao = "";
  valor = 0;
  
  do {
    console.log("BANCO FIAP");
    console.log("O Banco da Tecnologia\n");
  
    console.log("1 - CONTA POUPANÇA");
    console.log("2 - CONTA CORRENTE");
    console.log("3 - CONTA ESPECIAL");
    console.log("4 - SAIR\n");
  
    op = leia("Digite o número do tipo de conta a ser aberta: ");
  
    if (op == "1") {
      console.log("BANCO FIAP");
      console.log("O banco da tecnologia\n");
      console.log("CONTA POUPANÇA\n");
      let numero = leia("Digite o número da conta: ");
      let cpf = leia("Digite o seu CPF: ");
      let diaAniversarioPoupanca = leia(
        "Digite o dia do aniversário da sua conta: "
      );
      let cp1 = new ContaPoupanca(numero, cpf, 0, false, diaAniversarioPoupanca);
  
      cp1.ativar();
  
      for (let x = 1; x <= 10; x++) {
        valor = parseInt(leia("Digite o valor: "));
        opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase();
        if (opcao == "C") {
          cp1.credito(valor);
        } else if (opcao == "D") {
          cp1.debito(valor);
        }
        console.log("Saldo atual da conta: " + cp1.saldo);
      }
      dia = leia("Digite o dia de hoje: ");
      cp1.correcao(dia);
    } else if (op == "2") {
      console.log("CONTA CORRENTE");
  
      let numero = parseInt(leia("Digite o numero da conta : "));
      let cpf = leia("Digite o cpf da conta : ");
      let c1 = new contaCorrente(numero, cpf, 0, false, 3);
  
      c1.ativar();
      for (let x = 1; x <= 10; x++) {
        console.log("Movimento : " + x);
        console.log("Saldo atual conta : " + c1.saldo);
        op = leia("Digite D - debito ou C para credito : ").toUpperCase();
        if (op == "D") {
          valor = parseInt(leia("Digite o valor para debito : "));
          c1.debito(valor);
        } else if (op == "C") {
          valor = parseInt(leia("Digite o valor para crédito : "));
          c1.credito(valor);
        }
      }
  
      numeroDeTaloes = leia("Digite a quantidade de Talões que quer solicitar: ");
      c1.pediTalao();
      console.log("Saldo final da conta " + c1.saldo);
  
    } else if (op == "3") {
      console.log("BANCO FIAP");
      console.log("O banco da tecnologia\n");
      console.log("CONTA ESPECIAL");
      let numero = leia("Digite o número da conta: ");
      let cpf = leia("Digite seu CPF: ");
      let ce1 = new contaEspecial(numero, cpf, 0, false, 1000);
  
      ce1.ativar();
  
      for (let i = 1; i <= 10; i++) {
        console.log("Movimento " + i);
  
        console.log("Saldo da conta : " + ce1.saldo + " R$");
  
        valor = parseInt(leia("Digite o valor :"));
  
        op = leia("Digite D - débito ou C - crédito : ").toUpperCase();
  
        if (op == "C") {
          ce1.credito(valor);
        } else if (op == "D") {
          if (valor > ce1.saldo + ce1.limite) {
            console.log("Você não tem dinheiro suficiente");
          } else if (valor > ce1.saldo) {
            let x = valor - ce1.saldo;
            ce1.usarLimite(x);
          }
          ce1.debito(valor);
        }
      }
    } else if (op == "4") {
      console.log("Saindo do programa");
    } else {
      console.log(
        "O caractere digitado não é valido, escreva usando a legenda correta."
      );
    }
  } while (op != "4");
  console.log("Fim do seu atendimento, volte sempre!!");
  