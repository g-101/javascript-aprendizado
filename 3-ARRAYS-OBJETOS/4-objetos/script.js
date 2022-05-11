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
