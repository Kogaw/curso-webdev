function calcular(operacao, valor1, valor2){
    let resultado = 0
    switch(operacao){

        case 'adição':
            resultado = valor1 + valor2
            console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`)
            break;
        
        case 'subtração':
            resultado = valor1 - valor2
            console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}`)
            break;
        
        case 'multiplicação':
            resultado = valor1 * valor2
            console.log(`A multiplicação de ${valor1} por ${valor2} é igual a ${resultado}`)
            break;

        case 'divisão':
            resultado = valor1 / valor2
            console.log(`A divisão de ${valor1} por ${valor2} é igual a ${resultado}`)
            break;

        default:
            console.log('Operação inválida')
    }
}
calcular('adição', 10, 5)
calcular('subtração', 10, 5)
calcular('multiplicação', 10, 5)
calcular('divisão', 10, 5)
calcular('panqueca', 10, 5)
calcular('divisão', 10)