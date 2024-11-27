// pessoa -> 123 ->{...}
const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//abaixo irei congelar(na prática,tora) um objeto por completo e não somente suas ligações

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa)

//abaixo o objeto já nasce congelado
const pessoaConstante = Object.freeze({nome:'João'})