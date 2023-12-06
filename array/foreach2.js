// Cria um array chamado 'aprovados' com alguns elementos.
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Utiliza o novo método 'forEach2' criado para iterar sobre o array 'aprovados'.
aprovados.forEach2(function(nome, indice) {
    // Imprime no console uma mensagem para cada elemento do array, indicando o índice e o nome.
    console.log(`${indice + 1}) ${nome}`);
});


// Adiciona um novo método 'forEach2' ao protótipo de Array.
Array.prototype.forEach2 = function(callback) {
    // Itera sobre os elementos do array chamando a função de retorno de chamada (callback) para cada elemento.
    for (let i = 0; i < this.length; i++) {
        // A função de retorno de chamada é chamada com três argumentos: elemento, índice e array.
        callback(this[i], i, this);
    }
}