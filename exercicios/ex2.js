function tipoTriangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB & ladoA === ladoC){
        return 'Triângulo equilátero';
    }
    else if(ladoA === ladoB || ladoA === ladoB || ladoB === ladoC){
        return "Triângulo isóceles";
    }
    else{
       return 'Triângulo escaleno';
    }
}

console.log(tipoTriangulo(10,5,5))
console.log(tipoTriangulo(10,10.0,10))
console.log(tipoTriangulo(1,2,4))

