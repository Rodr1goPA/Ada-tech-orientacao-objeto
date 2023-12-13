class MathUtils{
    static sum(n1,n2){
        return n1 + n2
    }
    static sub(n1,n2){
        return n1 - n2
    }
    static div(n1,n2){
        return n1 / n2
    }
    static mult(n1,n2){
        return n1*n2
    }
}

console.log(`Resultado da soma: ${MathUtils.sum(10,20)}`)
console.log(`Resultado da subtração: ${MathUtils.sub(10,20)}`)
console.log(`Resultado da divisão: ${MathUtils.div(10,20)}`)
console.log(`Resultado da multiplicação: ${MathUtils.mult(10,20)}`)