// O que é o operador rest?
// um operador que faz com que uma função receba infinito parâmetros
// o operador rest vira um array


function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    console.log(typeof args)
    return args
}

console.log(imprimirNumeros(2,5,7.7,8,9.9))
