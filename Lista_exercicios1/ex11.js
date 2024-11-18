function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`${ano} é um ano bissexto.`);
        return true;
    } else {
        console.log(`${ano} não é um ano bissexto.`);
        return false;
    }
}

// Exemplos de uso
verificarAnoBissexto(2024); // "2024 é um ano bissexto." retorna true
verificarAnoBissexto(1900); // "1900 não é um ano bissexto." retorna false
verificarAnoBissexto(2000); // "2000 é um ano bissexto." retorna true
