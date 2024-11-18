function calcularNotas(notas) {
    return notas.map(nota => {
        // Verifica se a nota é maior ou igual a 38 e arredonda
        if (nota >= 38) {
            const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
            if (proximoMultiploDe5 - nota < 3) {
                return proximoMultiploDe5; // Arredondar
            }
        }
        return nota; // Sem arredondamento
    });
}

// Exemplo de uso
const notasAlunos = [84, 29, 57, 38, 33];
const notasFinais = calcularNotas(notasAlunos);
console.log(notasFinais); // [85, 29, 57, 40, 33]
