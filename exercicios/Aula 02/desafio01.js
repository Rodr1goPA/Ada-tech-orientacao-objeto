class Pessoa{
    nome
    idade
    cpf

    constructor(nome , idade , cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
}
const pessoa1 = new Pessoa("Rodrigo" , 37 , 741623458)
console.log(pessoa1)