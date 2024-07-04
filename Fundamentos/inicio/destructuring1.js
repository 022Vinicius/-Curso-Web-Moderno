// novo recurso do ES2015
const pessoa = {
    nome:'Ana',
    idade:5,
    endereco:{
        logadouro: 'Rua da Amora',
        numero:1000
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

const{ nome:n, idade:i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

const {endereco:{logadouro,numero,cep}} = pessoa
console.log(logadouro,numero,cep)