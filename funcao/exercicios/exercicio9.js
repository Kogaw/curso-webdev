function avaliaClassificacao(nota){
    let notaCorrigida = arredondarNota(nota)
    if (notaCorrigida >= 40){
        return "Aprovado"
    } else {
        return "Nota insuficiente"
    }
}

function arredondarNota(nota){
    if (nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(avaliaClassificacao(100))
console.log(avaliaClassificacao(87))
console.log(avaliaClassificacao(53))
console.log(avaliaClassificacao(38))
console.log(arredondarNota(38))