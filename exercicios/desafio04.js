class FiguraGeometrica{
    constructor(cor , tipoFigura){
        this.cor = cor
        this.tipoFigura = tipoFigura
    }
    calcularArea(){
        return "Calculo de area"
    }
}

class Quadrado extends FiguraGeometrica{
    constructor(base,altura,tipoFigura,cor){
        super(cor ,tipoFigura)
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura
    }
}

class Triangulo extends FiguraGeometrica{
    constructor(base,altura,tipoFigura,cor){
        super(cor ,tipoFigura)
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura / 2
    }
}

class Circulo extends FiguraGeometrica{
    constructor(raio , cor , tipoFigura){
        super(tipoFigura , cor)
        this.raio = raio
    }
    calcularArea(){
        return (this.raio * this.raio) * 3.14
    }
}

const q1 = new Quadrado(20,20,"quadrado","red")
console.log(q1)
console.log(`Calculo da area: ${q1.calcularArea()}`)
const t1 = new Triangulo(20,20,"triangulo","blue")
console.log(t1)
console.log(`Calculo de area: ${t1.calcularArea()}`)
const c1 = new Circulo(30 , "circulo" , "black")
console.log(c1)
console.log(`Calculo de area: ${c1.calcularArea()}`)
