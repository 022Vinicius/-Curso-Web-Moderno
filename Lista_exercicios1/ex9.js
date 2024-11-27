<<<<<<< HEAD
function avaliacaoAluno(nota) {
    // Se a nota for abaixo de 38, o aluno é reprovado diretamente
    if (nota < 38) {
        console.log('Aluno reprovado!');
        return;
    }

    // Calcular o próximo múltiplo de 5
    let proximoMultiplo5 = Math.ceil(nota / 5) * 5;

    // Verificar se a diferença entre a nota e o próximo múltiplo de 5 é menor que 3
    if (proximoMultiplo5 - nota < 3) {
        // Arredondar para o próximo múltiplo de 5
        nota = proximoMultiplo5;
    }

    // Se a nota for 40 ou mais, o aluno foi aprovado
    if (nota >= 40) {
        console.log(`Aluno aprovado com nota: ${nota}`);
    } else {
        console.log('Aluno reprovado!');
    }
}

// Exemplos de uso
avaliacaoAluno(84);  // Aluno aprovado com nota: 85
avaliacaoAluno(29);  // Aluno reprovado!
avaliacaoAluno(38);  // Aluno aprovado com nota: 40
avaliacaoAluno(57);  // Aluno aprovado com nota: 60
=======
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
>>>>>>> 52c61049965e8d4ebd70e31faff01db5acbaf9f6
