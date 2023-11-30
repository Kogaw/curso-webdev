function calcularPotencia(base, expoente){
    return Math.pow(base, expoente)
}

const resultado = calcularPotencia(2,3)
console.log(`Resultado: ${resultado}`)

//Versão sem Math.pow

function calcularPotencia(base, expoente){
    return base ** expoente
}

const resultado2 = calcularPotencia(2,8)
console.log(`Resultado: ${resultado2}`)
