function bhaskara(ax,bx,c){
    let resultados = []
    let delta = (bx**2) - (4 * ax * c)
    if (delta <0){
        return "O delta é negativo"
    }
    let x1 = (-bx + Math.sqrt(delta))/(2*ax)
    let x2 = (-bx - Math.sqrt(delta)) / (2*ax)
    resultados.push(x1,x2)
    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
console.log(bhaskara(1, -3,-10))
console.log(bhaskara(9,-12,4))
console.log(bhaskara(5,3,5))
console.log(bhaskara(1,-5,6))
console.log(bhaskara(1,-4,4))
console.log(bhaskara(1,2,2))



