//coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Renault Kwid',
    valor: 74000,
    cor:'Laranja',
    proprietario:{
        nome:'Vinicius',
        idade:20,
        nacionalidade:'brasileiro'
    }
}

console.log(carro.proprietario.nome)