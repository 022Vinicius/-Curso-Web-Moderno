function formatarValorDecimal(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais)
}


formatarValorDecimal(1 + 0.2)