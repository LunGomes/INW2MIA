class Retangulo{
    constructor(base,altura){
      this.base = base;
       this.altura = altura
    }
    montrarArea(){
    console.log("A área do retangulo é :"+(this.altura * this.base))
    }
    
}
    
let objeto1 = new Retangulo(5,3)
let objeto2 = new Retangulo(4,2)
    
console.log("Área dos retagulos")   

    console.log("RETANGULO 1")
objeto1.montrarArea()
    
    console.log("RETANGULO 2")
objeto2.montrarArea()