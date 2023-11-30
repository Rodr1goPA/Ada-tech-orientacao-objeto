class Quadrado{
    base
    altura
    cor
    constructor(base, altura , cor){
        this.base = base
        this.altura = altura
        this.cor = cor || "black"
    }
    calcularArea(){
        return this.base * this.altura
    }
    imprimir(){
        return 
    }
}

const q1 = new Quadrado(20 , 20)
console.log(q1)
console.log(`Area do quadrado: ${q1.calcularArea()}`)

