class Triangulo{
    base
    altura
    cor

    constructor(base , altura , cor){
        this.base = base
        this.altura = altura
        this.cor = cor || "black"
    }

    calcularArea(){
        return this.base * this.altura
    }
}

const t1 = new Triangulo(50 , 50 , "red")
console.log(t1)
console.log(`Area do triangulo: ${t1.calcularArea()}`)