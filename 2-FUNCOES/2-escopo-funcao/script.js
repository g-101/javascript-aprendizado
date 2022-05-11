// O Escopo da função não participa do global
// O escopo global é tudo que esta fora das funções
// O escopo de função é a area dentro da função

let y = 10
function imprimir() {
    let y = 150
    console.log("Olá!")
}

imprimir()
console.log(y)


// Escopo aninhado
let x = 5
const multiplicar = function(n) {
    // escopo de função
    let x = n * 2
    console.log("Escopo da função " + x)

    
    if(x === 10) {
        //escopo de bloco
        let x = 55;
        console.log("Escopo do bloco " + x)
    }
}

multiplicar(5)
console.log("Escopo global " + x)
