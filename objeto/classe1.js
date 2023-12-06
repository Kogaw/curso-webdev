// Definição da classe Lancamento
class Lancamento {
    // Construtor da classe Lancamento com valores padrão para nome e valor
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;   // Propriedade para armazenar o nome do lançamento
        this.valor = valor; // Propriedade para armazenar o valor do lançamento
    }
}

// Definição da classe CicloFinanceiro
class CicloFinanceiro {
    // Construtor da classe CicloFinanceiro com parâmetros mes e ano
    constructor(mes, ano) {
        this.mes = mes;       // Propriedade para armazenar o mês do ciclo financeiro
        this.ano = ano;       // Propriedade para armazenar o ano do ciclo financeiro
        this.lancamentos = []; // Propriedade para armazenar os lançamentos associados ao ciclo
    }

    // Método para adicionar lançamentos ao ciclo financeiro
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    // Método para calcular e retornar o valor consolidado de todos os lançamentos no ciclo financeiro
    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

// Criando uma instância da classe Lancamento chamada salario com nome 'Salario' e valor 45000
const salario = new Lancamento('Salario', 45000);

// Criando uma instância da classe Lancamento chamada contaDeLuz com nome 'Luz' e valor -220
const contaDeLuz = new Lancamento('Luz', -220);

// Criando uma instância da classe CicloFinanceiro chamada contas com mês 6 e ano 2018
const contas = new CicloFinanceiro(6, 2018);

// Adicionando os lançamentos salario e contaDeLuz ao ciclo financeiro contas
contas.addLancamentos(salario, contaDeLuz);

// Exibindo o valor consolidado de todos os lançamentos no ciclo financeiro contas
console.log(contas.sumario());