let a = 3
global.b= 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando variavel sem var e let!
abc = 3 // não fazer isso nunca, variáveis sem var e let sobrescrevem variaveis globais
console.log(global.abc)