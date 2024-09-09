divisoes = (dividendo,divisor) => {
    console.log(`resultado da divisão: ${(dividendo / divisor) | 0}`)
    console.log(`resto da divisão: ${dividendo % divisor}`)
}
divisoes(10,2)
divisoes(1,1)
divisoes(9,8)