// O que são closures?
// Uma função que lembra do ambiente que foi criada

function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}

const soma = lembrarSoma(2)
console.log(soma(5))
const soma2 = lembrarSoma(7)
console.log(soma2(5))

function contador(i) {
    let contador = i
    const incrementar = () => {
        console.log(contador)
        contador++
    }
    return incrementar
}

const meuContador = contador(5)
meuContador()
meuContador()