// O que é JSON?
// Javascript Object Notation
// Um tipo de dado pradonizado que lembra muito objetos em JS
// Usado para comunicação entre serviços
// So aceita aspas duplas
// Não aceita comentarios



const pessoa = {
    "nome": "Angela",
    "profissao": "Software developer",
    "idade": 29,
}

// preciso enviar o json para o servidor
console.log("Javascript para JSON")
const pessoaToString = JSON.stringify(pessoa) // converte javascript para JSON
console.log(typeof pessoaToString)
console.log(pessoaToString)

console.log("\nJSON para javascript")
const jsonToJavascript = JSON.parse(pessoaToString) // converte JSON para javascript
console.log(typeof jsonToJavascript)
console.log(jsonToJavascript)