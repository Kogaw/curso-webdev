function valores(valor1, valor2){
    soma = valor1 + valor2
    sub = valor1 - valor2
    mult = valor1 * valor2
    div = valor1 / valor2
    console.log(`A soma dos valores é ${soma}, a subtração deles é ${sub}, a multiplicação deles é ${mult} e a divisão deles é ${div}.`)

}

valores(5, 8)

// Versão Refatorada

function calcularOperacoes(valor1, valor2) {
    const soma = valor1 + valor2;
    const subtracao = valor1 - valor2;
    const multiplicacao = valor1 * valor2;
    const divisao = valor1 / valor2;

    return { soma, subtracao, multiplicacao, divisao };
}

function exibirResultados(operacoes) {
    console.log(`A soma dos valores é ${operacoes.soma}`);
    console.log(`A subtração dos valores é ${operacoes.subtracao}`);
    console.log(`A multiplicação dos valores é ${operacoes.multiplicacao}`);
    console.log(`A divisão dos valores é ${operacoes.divisao}`);
}

const valoresCalculados = calcularOperacoes(5, 8);
exibirResultados(valoresCalculados);