function criarProduto(nome, preco){
    return{
        nome: nome,
        preco: preco,
        apresentar:  function(){
            console.log(`Produto ${nome} de preço ${preco}`)
        }
    }
}

const produto1 = criarProduto('bola',33)
const produto2 = criarProduto('ps5',3700)

produto1.apresentar()
produto2.apresentar()