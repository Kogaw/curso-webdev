// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objetct em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome
}

console.log(typeof Produto)