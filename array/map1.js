// Cria um array chamado 'nums' com alguns números.
const nums = [1, 2, 3, 4, 5];

// Usa o método 'map' para criar um novo array 'resultado' com cada elemento multiplicado por 2.
let resultado = nums.map(function(e) {
    return e * 2;
});

// Imprime o novo array 'resultado' e o array original 'nums'.
console.log(resultado);
console.log(nums);

// Define três funções de transformação: soma10, triplo e paraDinheiro.
const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

// Usa os métodos 'map' encadeados para aplicar as transformações em sequência no array 'nums'.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

// Imprime o novo array 'resultado' após todas as transformações.
console.log(resultado);