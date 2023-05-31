class cosmeticos {
    constructor(id, descricao, ativo, estoque, preco, marca, tipo ) {
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo,
        this.estoque = estoque,
        this.preco = preco,
        this.marca = marca,
        this.tipo = tipo
    }

    ativar() {
        this.ativo = true;
    }

    retirarEstoque() {
        if (this.ativo) {
            if (valor < 0) {
              console.log("Impossivel realizar, valor negativo...");
            } else if (valor == 0) {
              console.log("Impossivel realizar, valor zerado...");
            } else if (valor > this.estoque) {
              console.log("Impossivel realizar, essa quantidade está indisponivel no nosso estoque");
            } else {
              this.estoque -= valor;
            }
          } else {
            console.log("Produto não encontrado");
          }
    }

    incluirEstoque() {
        if (this.ativo) {
            if (valor < 0) {
              console.log("Impossivel adicionar essa quantidade ao estoque, valor negativo");
            } else if (valor == 0) {
              console.log("Impossivel adicionar essa quantidade ao estoque, valor zerado...");
            }else if (valor > 10) {
                console.log("Impossivel adicionar essa quantidade ao estoque, valor acima do limite...");
              }
               else {
              this.estoque += valor;
            }
          } else {
            console.log("Produto não encontrado");
          }
    }
}

// PROGRAMA 

const leia = require('prompt-sync')()
let op = ""

do { 
    console.log("Loja BELEzura");
    console.log("Onde nos cuidamos pra VOCÊ poder se cuidar\n");
  
    op = leia("Deseja fazer compras S/N: ").toUpperCase();
  
    if(op == "S"){
        console.log("Loja BELEzura");
        console.log("Onde nos cuidamos pra VOCÊ poder se cuidar\n");
    
        const id = leia("Digite o id do produto: ");
        const descricao = leia("Digite a descrição do produto: ");
        const preco = leia("Digite o preço do produto: ");
        const marca = leia("Digite a marca do produto: ");
        const tipo = leia("Digite o tipo de produto: ");
        const cosmetico1 = new cosmeticos(id, descricao, false, 10, preco, marca,tipo);

        cosmetico1.ativar();

        for (let x = 1; x <= 5; x++) {
            console.log(cosmetico1);

            valor = parseInt(leia("Digite a quantidade a ser retirada do estoque: "));
         
              cosmetico1.retirarEstoque(valor);
            
            console.log("Estoque atual do produto: " + cosmetico1.estoque);
            console.log("Preço a ser pago: " + (valor*cosmetico1.preco));
          }
          console.log(cosmetico1);
          valor = parseInt(leia("Digite a quantidade a ser adicionada ao estoque: "))
          cosmetico1.incluirEstoque(add);
          console.log("Estoque atual do produto: " + cosmetico1.estoque);
    } 
    else{
        console.log("Valor digitado invalido");
    }

} while (op != "N");
console.log("Tchau!!");