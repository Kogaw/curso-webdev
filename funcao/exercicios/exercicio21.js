function identificarValor(idade){
    let valorPadrao = 100
    let valorTotal = 0

    if(idade > 60){
        valorTotal = valorPadrao + 130
    } else if (idade > 30){
        valorTotal = valorPadrao + 95
    } else if (idade > 10){
        valorTotal = valorPadrao + 50
    } else if( idade < 10 && idade > 0){
        valorTotal = valorPadrao + 80
    } else {
        return "Idade inválido"
    }
    return valorTotal
}

console.log(identificarValor(90))
console.log(identificarValor(50))
console.log(identificarValor(20))
console.log(identificarValor(5))
console.log(identificarValor(-5))