// Adiciona um novo método 'map2' ao protótipo de Array, simulando a funcionalidade do método nativo 'map'.
Array.prototype.map2 = function(callback) {
    const newArray = [];
    // Itera sobre os elementos do array chamando a função de retorno de chamada (callback) para cada elemento.
    for (let i = 0; i < this.length; i++) {
        // Adiciona o resultado da função de retorno de chamada a um novo array.
        newArray.push(callback(this[i], i, this));
    }
    // Retorna o novo array resultante.
    return newArray;
}

// Cria um array chamado 'carrinho' contendo strings JSON representando produtos.
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

// Define uma função chamada 'paraObjeto' que converte uma string JSON em um objeto JavaScript.
const paraObjeto = json => JSON.parse(json);

// Define uma função chamada 'apenasPreco' que retorna o valor da propriedade 'preco' de um objeto.
const apenasPreco = produto => produto.preco;

// Utiliza o método 'map2' criado para simular o método nativo 'map'. 
// Aplica a função 'paraObjeto' para cada elemento do array 'carrinho' e depois a função 'apenasPreco'.
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

// Imprime o novo array 'resultado' contendo apenas os preços dos produtos.
console.log(resultado);