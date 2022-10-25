

//  Função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
function alerta() {
  console.log('Mensangem de Alerta!')
}
alerta()

//  Função tradicional com parâmetros e um retorno de valor;
function ola(nome) {
  console.log('Olá', nome)
}
ola('Softex')

//  Arrow function com parâmetros e que retorne um valor;
const outro_ola = (nome) => {
  return console.log('Olá', nome)
}
outro_ola('Softex!')

