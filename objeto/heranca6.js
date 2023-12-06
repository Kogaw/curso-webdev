function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando new
function novo(f, ...params){
    const obj = {} //Cria um array para armazenar as informações
    obj.__proto__ = f.prototype //Define o __proto__ como sendo o mesmo prototype da função
    f.apply(obj, params) //Aplica os params na variável obj
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)