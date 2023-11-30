function diaDaSemana(numero) {
    let nomeDia;

    switch (numero) {
        case 1:
            nomeDia = "Domingo";
            break;
        case 2:
            nomeDia = "Segunda-Feira";
            break;
        case 3:
            nomeDia = "Terça-Feira";
            break;
        case 4:
            nomeDia = "Quarta-Feira";
            break;
        case 5:
            nomeDia = "Quinta-Feira";
            break;
        case 6:
            nomeDia = "Sexta-Feira";
            break;
        case 7:
            nomeDia = "Sábado";
            break;
        default:
            return "Data inválida";
    }

    return nomeDia;
}

console.log(diaDaSemana(7));
console.log(diaDaSemana(6));
console.log(diaDaSemana(5));
console.log(diaDaSemana(4));
console.log(diaDaSemana(3));
console.log(diaDaSemana(2));
console.log(diaDaSemana(1));
console.log(diaDaSemana(8));