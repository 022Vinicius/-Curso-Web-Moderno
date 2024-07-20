function area(largura,altura){
    const area = altura * largura
    if (area > 20){
        console.log(`Valor acima do permitido, ${area}m²`)
    }
    else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4,5))
console.log(area(10,3))