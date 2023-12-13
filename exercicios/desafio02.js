class Circulo{
    static calcularArea(raio){
        return (raio * raio) * 3.14
    }
    static calcularCircuferencia(raio){
        return 2 * Math.PI * raio
    }
}

console.log(`Area do circulo: ${Circulo.calcularArea(10)}`)
console.log(`Area do circulo: ${Circulo.calcularCircuferencia(10)}`)