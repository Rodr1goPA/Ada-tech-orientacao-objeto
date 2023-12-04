class Animal {
    constructor(nome , idade , especie){
        this.nome = nome
        this.idade = idade
        this.especie = especie
    }
    imprimirDados(){
        return "Dados do animal"
    }
    emitirSom(){
        return "Som do animal"
    }
}

class Cachorro extends Animal{
    constructor(nome , idade , especie , tamanho){
        super(nome , idade , especie)
        this.tamanho = tamanho
    }
    imprimirDados(){
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nEspecie: ${this.especie}\nTamanho: ${this.tamanho}`
    }
    emitirSom(){
        return "Som do cachorro: Au au au..."
    }
}

class Gato extends Animal{
    constructor(nome , idade , especie , cor){
        super(nome, idade , especie)
        this.cor = cor
    }
    imprimirDados(){
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nEspecie: ${this.especie}\nCor: ${this.cor}`
    }
    emitirSom(){
        return "Som do Gato: Miauuu...."
    }
}



const c1 = new Cachorro("Laila" , 10 , "Cachorro" , "Porte pequeno")
console.log(c1.imprimirDados())
console.log(c1.emitirSom())
const g1 = new Gato("Felix" , 8 , "Gato" , "Preto")
console.log(g1.imprimirDados())
console.log(g1.emitirSom())