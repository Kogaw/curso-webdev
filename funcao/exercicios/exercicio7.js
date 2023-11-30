function calcularBhaskara(ax2, bx, c) {
    let delta = bx ** 2 - 4 * ax2 * c;
    let resultados = []

    if(delta > 0){
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        resultados.push(x1)
        resultados.push(x2)
        return resultados

    }   else if(delta === 0){
        const x = -bx / (2 * ax2)
        resultados.push(x)
        return resultados
    } else {
        return "Delta é negativo.";
    }
}

resultado1 = calcularBhaskara(1, 3, 2);
console.log(resultado1);
resultado2 = calcularBhaskara(3, 1, 2);
console.log(resultado2);