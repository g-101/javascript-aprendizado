// Argumentos Opcionais
function multiplicacao(n1, n2) {
    // tratando um argumento que não foi passado
    if(n1 == undefined) {
        return 2 * n2
    }
    else if(n2 == undefined){
        return 2 * n1
    }
    return n2 * n1
}

// Argumenntos com valor default
function potencia(base, exp=5) {
    if(base == undefined) {
        return "Necessita de base para o calculo"
    }
    return Math.pow(base, exp)
}

console.log(multiplicacao(10))
console.log(potencia(50))
console.log(potencia())