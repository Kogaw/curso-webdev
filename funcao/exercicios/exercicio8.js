let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes(stringPontuacoes){
    const pontuacoes = stringPontuacoes.split(", ").map(Number)

    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 0; i < pontuacoes.length; i++){
        const pontuacaoAtual = pontuacoes[i]

        if(pontuacaoAtual > maiorPontuacao){
            maiorPontuacao = pontuacaoAtual
            qtdQuebraDeRecords++
        } else if(pontuacaoAtual < menorPontuacao){
            menorPontuacao = pontuacaoAtual
            piorJogo = i + 1
        }
    } 
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes));

//Versão Refatorada

