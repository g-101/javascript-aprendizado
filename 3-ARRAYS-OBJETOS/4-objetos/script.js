// O que são objetos?
// Uma coleção de propriedades(metodos e atributos)
// Podemos acessar essas propriedades, utlizando chaves/keys
const pessoa = {
    nome: "Angela",
    profissao: "Software developer",
    idade: 29,
}

console.log(pessoa)
console.log(pessoa.idade)
console.log("Deletando...")
console.log(delete pessoa.idade) // propriedade deletada
console.log(pessoa.idade)
// criando uma propriedade
pessoa.casado = false
console.log(pessoa)

// copiando as propriedades de um objeto para outro objeto
const objetoA = {
    prop1: "propriedade1",
    prop2: "propriedade2",
}

const objetoB = {
    prop3: "propriedade3",
    prop4: "propriedade4",
}
Object.assign(objetoA, objetoB)
console.log(objetoA) // agora objetoA tem prop3 e prop4 em seus atributos
console.log(objetoB)

const arr = [1, 2]
console.log(Object.keys(arr))
console.log(Object.keys(objetoA))
