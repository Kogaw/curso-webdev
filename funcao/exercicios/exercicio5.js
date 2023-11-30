function devolverDecimal(valorDecimal){
    ValorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(ValorEmReais)
}

devolverDecimal(0.1 + 0.2)

//Versão Refatorada
function formatarDecimalParaReais(valorDecimal) {
    const valorFormatado = valorDecimal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    console.log(valorFormatado);
}

formatarDecimalParaReais(0.1 + 0.2);