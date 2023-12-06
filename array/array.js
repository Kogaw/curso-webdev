// Imprime os tipos de Array, Array criado com 'new Array', e um array literal ([]).
console.log(typeof Array, typeof new Array, typeof []);

// Cria um array 'aprovados' usando 'new Array' com três elementos: 'Bia', 'Carlos' e 'Ana'.
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

// Reatribui o array 'aprovados' usando a sintaxe literal e imprime os elementos individuais pelos índices.
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // Imprimirá 'undefined' porque não há elemento no índice 3.

// Modifica o array 'aprovados', adicionando um elemento no índice 3 e usando 'push' para adicionar 'Abia'.
aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length); // Imprime o comprimento do array, que agora é 5.

// Adiciona um elemento no índice 9, resultando em um array com "buracos" entre os índices 5 e 9.
aprovados[9] = 'Rafael';
console.log(aprovados.length); // Imprime 10, pois o maior índice é 9.
console.log(aprovados[8] === undefined); // Imprime true, pois o índice 8 está indefinido.

// Imprime o array 'aprovados'.
console.log(aprovados);

// Ordena o array 'aprovados' em ordem alfabética.
aprovados.sort();
console.log(aprovados);

// Deleta o elemento no índice 1, resultando em 'undefined' para esse índice.
delete aprovados[1];
console.log(aprovados[1]); // Imprime 'undefined'.
console.log(aprovados[2]); // Imprime 'Ana'.

// Recria o array 'aprovados' e usa 'splice' para remover um elemento a partir do índice 1.
aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1);
console.log(aprovados);