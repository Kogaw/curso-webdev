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

// Usa os métodos 'map' encadeados para transformar o array 'carrinho' em um novo array contendo apenas os preços dos produtos.
const resultado = carrinho.map(paraObjeto).map(apenasPreco);

// Imprime o novo array 'resultado' contendo apenas os preços dos produtos.
console.log(resultado);