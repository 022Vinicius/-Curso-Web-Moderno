function rand({min = 0, max = 10000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand({max:50,min:40}))
console.log(rand({min:1955}))
console.log(rand({}))
