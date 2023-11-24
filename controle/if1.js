function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seFoVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`)
    }
}

seFoVerdadeEuFalo()
seFoVerdadeEuFalo(null)
seFoVerdadeEuFalo(undefined)
seFoVerdadeEuFalo(NaN)
seFoVerdadeEuFalo('')
seFoVerdadeEuFalo(0)
seFoVerdadeEuFalo(-1)
seFoVerdadeEuFalo(' ')
seFoVerdadeEuFalo('?')
seFoVerdadeEuFalo([])
seFoVerdadeEuFalo([1, 2])
seFoVerdadeEuFalo({})

