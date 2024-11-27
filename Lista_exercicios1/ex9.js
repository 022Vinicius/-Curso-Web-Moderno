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