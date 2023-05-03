class Aviao {
    constructor(ligado,modelo,velocidade){
        this.ligado = ligado;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    ligar(){
        console.log("Ligando...")
        this.ligado = true
    }
    
}

let aviaoED = new Aviao(false,0,"Bimotor")
let aviaoTurma = new Aviao(false,0,"747")

console.log(aviaoED)
aviaoED.ligar()


class MyAviao {
    constructor(ligado,modelo,ano,velocidade,piloto,empresa){
        this.ligado = ligado;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
        this.piloto = piloto;
        this.empresa = empresa
    }

    MyLigar(){
        console.log("Ligando...")
        this.ligado = true
    }
    
}

let aviao1 = new MyAviao(false,"Jurouh112",1967,1200,"Manoel","Latam")
let aviao2 = new MyAviao(false,"BmbaVoadora113",1987,800,"Cláudia","Avianca")

console.log(aviao1);
aviao1.MyLigar();

console.log(aviao2);
aviao2.MyLigar();