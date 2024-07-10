Number.prototype.entre = function(inicio, fim){
    return this >= inicio &&  this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre(9,10)){
        console.log("Aluno Destaque!")
    }
    else if(nota.entre(7, 8.99)){
        console.log('Aprovado!')
    }
    else if(nota.entre(3,6.99)) {
        console.log('Fará a prova final!')
    }
    else if (nota.entre(0,2.99)){
        console.log("Reprovado")
    }
    else{
        console.log("Reprovado")
    }
}

imprimirResultado(2)
imprimirResultado(0.4)
imprimirResultado(4)
imprimirResultado(7)
imprimirResultado(10)