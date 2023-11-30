function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

//Código Refatorado 

function calcularJurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + capitalInicial * taxa * tempo;
}

function calcularJurosCompostos(capitalInicial, taxa, tempo) {
    return capitalInicial * Math.pow(1 + taxa, tempo);
}

const capitalInicial = 100;
const taxaDeJuros = 10 / 100;
const periodoDeTempo = 2;

console.log(`Juros Simples: ${calcularJurosSimples(capitalInicial, taxaDeJuros, periodoDeTempo)}`);
console.log(`Juros Compostos: ${calcularJurosCompostos(capitalInicial, taxaDeJuros, periodoDeTempo)}`);