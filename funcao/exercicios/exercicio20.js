function calcularNotas(valor) {
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador2 = 0;
    let contador1 = 0;

    while (valor > 0) {
        if (valor >= 100) {
            contador100++;
            valor -= 100;
        } else if (valor >= 50) {
            contador50++;
            valor -= 50;
        } else if (valor >= 20) {
            contador20++;
            valor -= 20;
        } else if (valor >= 10) {
            contador10++;
            valor -= 10;
        } else if (valor >= 5) {
            contador5++;
            valor -= 5;
        } else if (valor >= 2) {
            contador2++;
            valor -= 2;
        } else if (valor >= 1) {
            contador1++;
            valor -= 1;
        }
    }
    
    return elaborarResultado(contador100, contador50, contador20, contador10, contador5, contador2, contador1);
}

function elaborarResultado(contador100, contador50, contador20, contador10, contador5, contador2, contador1) {
    let resultado = '';

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `;
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `;
    }

    if (contador20 > 0) {
        resultado += `${contador20} nota(s) de R$ 20. `;
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `;
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `;
    }

    if (contador2 > 0) {
        resultado += `${contador2} nota(s) de R$ 2. `;
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `;
    }

    return resultado;
}

console.log(calcularNotas(193));
