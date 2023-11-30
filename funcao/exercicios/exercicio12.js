function calcularFatorial(numero){
    if(numero < 0){
        console.log('Número inválido. O valor fatorial para valores negativos é inválido')
    } else if(numero === 1 || numero === 0){
        console.log('O fatorial desse número é 1')
    } else {
        var resultado = 1
        for(i = 2; i <= numero; i++){
            resultado *= i
        }
        console.log(`O fatorial de ${numero} é ${resultado}`)
    }
}

calcularFatorial(3)
calcularFatorial(10)
calcularFatorial(6)
calcularFatorial(4)

//Versão recursiva

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
console.log(fatorial(3))