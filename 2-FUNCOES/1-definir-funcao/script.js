// O que são funções?
// São codigos separados em blocos e que podem ser reutilizaveis


// Ao ser declarada, para funcionar a função precisa ser chamada
function imprimir() {
    console.log("Olá!")
}

imprimir() // chamando a função

function multiplicacao(x,y,z) {
    return x * y * z 

}

const multi = multiplicacao(2,5,9)
console.log(multi)