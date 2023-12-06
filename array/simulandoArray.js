// Cria um objeto 'quaseArray' que simula um array utilizando chaves numéricas como índices.
const quaseArray = {0: 'Raphael', 1: 'Ana', 2: 'Bia'};
console.log(quaseArray);

// Adiciona um método 'toString' ao objeto 'quaseArray' que retorna os valores do objeto como um array.
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

// Imprime o valor no índice 0 do 'quaseArray'.
console.log(quaseArray[0]);

// Cria um array 'meuArray' como referência para comparar com o 'quaseArray'.
const meuArray = ['Raphael', 'Ana', 'Bia'];

// Imprime a representação de string do 'quaseArray' usando o método 'toString' adicionado e o 'meuArray'.
console.log(quaseArray.toString(), meuArray);