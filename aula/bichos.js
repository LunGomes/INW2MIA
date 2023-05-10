class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }

    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}

class Gato extends Animal{
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    miar(){
        console.log("Miaaaaaaaaaaaaau...")
    }
}

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca,
        this.cor = cor
    }

    latindo(){
        console.log("AU AU AU AU AU AU AU...")
    }
}


//PROGRAMA PRINCIPAL
let bicho1 = new Animal("mamifero", "medio", false, 2020);
console.log(bicho1)
bicho1.fazerBarulho()
console.log(bicho1.porte)

let frajola = new Gato("felino", "sphynx", "preto");
frajola.fazerBarulho()
frajola.miar()
frajola.nascimento = 2019
console.log("A idade do frajola é "+frajola.retornarIdade(2023))

let zangado = new Cachorro("Canino", "beagle", "preto")
zangado.fazerBarulho()
zangado.latindo()
zangado.nascimento = 2022
console.log("A idade do zangado é "+zangado.retornarIdade(2023))

let snoop = new Cachorro("Canino", "beagle", "malhado")
snoop.latindo()
snoop.nascimento = 2021
console.log("A idade do snoop "+snoop.retornarIdade(2023))