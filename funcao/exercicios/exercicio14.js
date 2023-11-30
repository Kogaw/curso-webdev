function receberFruta(fruta) {
    let mensagem

    switch (fruta) {
        case 'Maçã':
            mensagem = "Não temos essa fruta aqui";
            break;

        case 'Kiwi':
            mensagem = "Estamos com escassez de kiwis";
            break;

        case 'Melancia':
            mensagem = "Aqui está, são 3 reais o quilo";
            break;

        default:
            mensagem = "Fruta não reconhecida";
    }

    return mensagem;
}

console.log(receberFruta('Maçã'));
console.log(receberFruta('Kiwi'));
console.log(receberFruta('Melancia'));
console.log(receberFruta('Picanha'));

//Versão refatorada

function receberFruta(fruta) {
    switch (fruta) {
        case 'Maçã':
            return "Não temos essa fruta aqui";

        case 'Kiwi':
            return "Estamos com escassez de kiwis";

        case 'Melancia':
            return "Aqui está, são 3 reais o quilo";

        default:
            return "Fruta não reconhecida";
    }
}

console.log(receberFruta('Maçã'));
console.log(receberFruta('Kiwi'));
console.log(receberFruta('Melancia'));
console.log(receberFruta('Picanha'));