class Agenda {
    contatos = [];
    constructor(){}
    adicionarContatos(contato){
        this.contatos.push(contato)
    }
}

const ag = new Agenda();
ag.adicionarContatos({nome:"Rodrigo" , telefone:"35991856038" , email:"admin@gmail.com"}, {nome:"Mateus" , telefone:"35967800433" , email})
console.log(ag.contatos)