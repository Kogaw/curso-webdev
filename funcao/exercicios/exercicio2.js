function classificarTriangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3){
        console.log('É um triângulo equilátero')
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        console.log('É um triângulo isóceles')
    } else {
        console.log('É um triângulo escaleno')
    }
}

classificarTriangulo(5, 5, 5)
classificarTriangulo(5, 5, 6)
classificarTriangulo(4, 5, 6)

//Versão Refatorada

function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Equilátero'; // Todos os lados são iguais.
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return 'Isósceles'; // Pelo menos dois lados são iguais.
    } else {
        return 'Escaleno'; // Todos os lados são diferentes.
    }
}

// Exemplos de uso
const tipoTriangulo1 = classificarTriangulo(5, 5, 5);
console.log(`Triângulo 1: ${tipoTriangulo1}`);

const tipoTriangulo2 = classificarTriangulo(5, 5, 6);
console.log(`Triângulo 2: ${tipoTriangulo2}`);

const tipoTriangulo3 = classificarTriangulo(4, 5, 6);
console.log(`Triângulo 3: ${tipoTriangulo3}`);