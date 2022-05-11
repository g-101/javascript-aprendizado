// O que são funções arrow?
// Uma outra forma de escrever funções, porem em alguns casos não é bem utilizada


// Função tradicional
// function imprimir() {
//     console.log("Olá!")
// }

// Arrow
const imprimir = () => {
    return "Hello imprimir arrow!"
}
// ou
const imprimir2 = x => console.log(x)

console.log(imprimir())
console.log(imprimir2("Hello imprimir 2 arrow!"))
