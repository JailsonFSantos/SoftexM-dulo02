function Pessoa(Nome, idade, sexo) {
    this.nome = Nome
    this.idade = idade
    this.sexo = sexo
  }

var pessoa = new Pessoa("Joao", 21, "M");

for (var prop in pessoa) {
    console.log("Pessoa." + prop + " = " + pessoa[prop]);
  }


const carros = ["Fiat", "Honda", "BMW", "Ford"]


for (const i of carros){
    console.log(i)
}
