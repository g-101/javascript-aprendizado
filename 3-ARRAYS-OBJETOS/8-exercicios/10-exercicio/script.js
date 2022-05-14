// Crie o objeto calculadora
// Que tem os metodos: soma, subtrair, multiplicar e dividir
// os metodos so podem ter dois parametros
// utilize cada um dos metodos e imprima o resultado no console

const calculator = {
    add: function(n1=0, n2) {
        return n1 + n2
    },
    sub: function(n1, n2) {
        return n1 - n2
    },
    multi: function(n1=1, n2) {
        return n1 * n2
    },
    div: function(n1, n2) {
        return n1 / n2
    },
}

console.log(calculator.add(5,5))
console.log(calculator.sub(5,5))
console.log(calculator.multi(5,5))
console.log(calculator.div(10,5))





