// Luana Gomes da Siva RM 14883
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
class ContaPoupanca extends  Conta{  
    constructor(numero,cpf,saldo,ativo,diaPoupanca,diaAtual){
        super(numero,cpf,saldo,ativo);
        this.diaPoupanca = diaPoupanca;
        this.diaAtual = diaAtual
    }
    correcaoDoSaldo(dia){
        if(this.diaPoupanca == dia){
            this.saldo = (this.saldo * 0.05)+this.saldo
            console.log("Sua conta foi corrigida")
        } else{
            console.log("Não é a data de correção da sua conta")
        }
    }
}
//Luana Gomes da Silva RM 14883
class contaCorrente extends Conta {
    constructor(numero, cpf, saldo, ativo, contarTalao) {
        super(numero, cpf, saldo, ativo)
        this.contarTalao = contarTalao
    }

    pediTalao() {
        if (numeroDeTaloes < 0) {
            console.log("não é possível solicitar uma quantidade de Talões menor que 0")
        } else if (numeroDeTaloes == 0) {
            console.log("Você selecionou 0 talões")
        } else if (numeroDeTaloes > 3) {
            console.log("A quantidade solicitada é maior do que o disponível")
        } else {
            if ((numeroDeTaloes * 30) > super.saldo()) {
                console.log("Você não tem saldo o suficiente para pagar pela quantidade de Talões solicitada")
            } else {
                super.debito((numeroDeTaloes * 30));
                console.log("Vamos emitir os Talões agora...")
                this.contarTalao = this.contarTalao - numeroDeTaloes
                console.log("Talões disponíveis: " + this.contarTalao)
            }
        }
    }
}

// Piettra Boschini Sattolo RM 15460
class ContaEspecial extends Conta{
    constructor(numero,cpf,saldo,ativo,limiteDoSaldo){
        super(numero,cpf,saldo,ativo);
        this.limiteDoSaldo = limiteDoSaldo
    }
        limiteDoSaldo(){
            if (this.saldo >= super.debito(valor)){
                this.saldo = this.saldo - super.debito(valor)
                console.log(""+this.saldo)
            } else if (this.saldo <  super.debito(valor)) {
                    this.limiteDoSaldo = this.limiteDoSaldo -  super.debito(valor)
            }
        }
} 

// PROGRAMA PRINCIPAL 
const leia = require("prompt-sync")()
console.log("BANCO FIAP")
console.log("O banco da tecnologia")
let tipo = console.log("1 - conta poupança")
console.log("2 - conta corrente")
console.log("3 - conta especial")
console.log("4 - Sair")

let op = 0
let valor = 0


tipo = leia("Digite o número do tipo de conta a ser aberta : ")
if (tipo == "1") {
    console.log("CONTA POUPANÇA")

    let numero = parseInt(leia("Digite o numero da conta : "))
    let cpf = leia("Digite o cpf : ")
    let diaPoupanca = leia("Digite o dia da sua Conta Poupança : ") 
    let dia = leia("Digite o dia atual : ") 
    let cp1 = new ContaPoupanca(numero,cpf,0,false,diaPoupanca,dia)
    cp1.ativar()


    for (let x=1; x<=10; x++){
        console.log("Movimento "+x)
        console.log("Saldo da conta R$ : "+cp1.saldo)
        valor = parseInt(leia("Digite o valor que desejar tirar ou inserir : "))
        op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
        if(op=="C"){
            cp1.credito(valor)
        }
        else if (op=="D"){
            cp1.debito(valor)
        }
}
console.log(cp1.correcaoDoSaldo(dia))
console.log("Saldo final da conta R$ : "+cp1.saldo)

} else if (tipo == "2") {
    console.log("CONTA CORRENTE")

    let numeroDeTaloes = 0
let numero = parseInt(leia("Digite o numero da conta : "))				
let cpf = leia("Digite o cpf da conta : ")				
let c1 = new contaCorrente(numero,cpf,0,false,3)

    c1.ativar()
    for (let x = 1; x <= 10; x++) {
        console.log("Movimento : " + x)
        console.log("Saldo atual conta : " + c1.saldo)
        op = leia("Digite D - debito ou C para credito : ")
        if (op == "D") {
            valor = parseInt(leia("Digite o valor para debito : "))
            c1.debito(valor)
        } else if (op == "C") {
            valor = parseInt(leia("Digite o valor para crédito : "))
            c1.credito(valor)
        }

        numeroDeTaloes = leia("Digite a quantidade de Talões que quer solicitar: ");
        console.log(c1.solicitaTalao);
        console.log("Saldo final da conta " + c1.saldo)
    }



} else if (tipo == "3") {
    console.log("CONTA ESPECIAL")
let numero = parseInt(leia("Digite o numero da conta : "))				
let cpf = leia("Digite o cpf da conta : ")		

let conta = new ContaEspecial(numero,cpf,0,false,1000)
    for (let x = 1; x <= 10; x++) {
        console.log("Movimento : " + x)
        console.log("Saldo atual conta : " + conta.saldo)
        op = leia("Digite D - debito ou C para credito : ")
        if (op == "D") {
            valor = parseInt(leia("Digite o valor para debito : "))
            conta.debito(valor)
        } else if (op == "C") {
            valor = parseInt(leia("Digite o valor para crédito : "))
            conta.credito(valor)
        } else if (tipo == 4) {
    console.log("Volte Sempre ao nosso banco!")
        }
       
    }
    conta.limiteDoSaldo()
    console.log("Saldo final da conta R$ : "+conta.saldo)
}
