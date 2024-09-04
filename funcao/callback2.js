const notas = [8.5, 5.6, 7.3, 6.7, 4]
const notasBaixas1 = []

//sem callback
for(let i in notas){
    if( notas[i] < 7.0){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7.0
})

console.log(notasBaixas2)

//com callback e função anônima

const notasBaixas3 =  notas.filter( nota => nota < 7.0)
console.log(notasBaixas3)