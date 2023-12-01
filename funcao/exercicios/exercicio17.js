function calcularAumento(plano, salarioAtual){
    let novoSalario = 0

    switch(plano){
        case 'a':
            novoSalario =  salarioAtual * 1.10
            return novoSalario

        case 'b':
            novoSalario =  salarioAtual * 1.15
            return novoSalario
        
        case 'c':
            novoSalario =  salarioAtual * 1.20
            return novoSalario

        default:
            return "Plano inválido"
    }
}

console.log(calcularAumento('a', 1000))
console.log(calcularAumento('b', 1000))
console.log(calcularAumento('c', 1000))
console.log(calcularAumento('d', 1000))
