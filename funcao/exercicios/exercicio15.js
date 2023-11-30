function receberModelo(carro) {
    switch (carro) {
        case 'hatch':
            return "Compra efetuada com sucesso";

        case 'sedan': case 'motocicleta': case 'caminhonete':
            return "Tem certeza que não prefere este modelo?";
        default:
            return "Não trabalhamos com este tipo de automóvel aqui";
    }
}
console.log(receberModelo('hatch'))
console.log(receberModelo('sedan'))
console.log(receberModelo('motocicleta'))
console.log(receberModelo('caminhonete'))
console.log(receberModelo('perua'))