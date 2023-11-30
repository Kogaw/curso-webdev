function realizarDivisao(dividendo, divisor){
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor
    return {resultado, resto}
   
}

console.log(realizarDivisao(15,6))

//Versão Refatorada

const realizarDivisao = (dividendo, divisor) => {
    const resultado = Math.floor(dividendo / divisor);
    const resto = dividendo % divisor;

    return { resultado, resto };
};

const { resultado, resto } = realizarDivisao(15, 6);

console.log(`Resultado: ${resultado}`);
console.log(`Resto: ${resto}`);