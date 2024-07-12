// do while:
// com do while, a estrutura de repetição sempre será executada, mesmo se a condição de parada já estiver sendo atendida, isso porque o while fica no fim do bloco
//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja.

function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return  Math.floor(valor)
}


let opcao = 5

do{
    opcao = getInteiroAleatorioEntre(0,10)
    console.log(`O valor escolhido foi : ${opcao}`)
}while(opcao != 5)

console.log("fim do programa")