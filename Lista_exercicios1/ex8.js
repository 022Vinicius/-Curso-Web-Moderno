let pontuacoes = "10 20 20 8 25 3 0 30 1"

function avaliarPontuacoes (pontuacoes){
    let stringPontuacoes = pontuacoes.split(",")
    let qtdRecordesQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = stringPontuacoes[0]
    let menorPontuacao = stringPontuacoes[0]

    for(let i = 1; i  < stringPontuacoes.length; i++){
        if(parseInt(stringPontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = stringPontuacoes[i]
            qtdRecordesQuebrados++
        }
        else if(parseInt(stringPontuacoes[i]) < parseInt(menorPontuacao)){
            menorPontuacao = stringPontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdRecordesQuebrados,piorJogo]
}

console.log(avaliarPontuacoes(pontuacoes))