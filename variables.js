//Declarando uma variavel
let a;
var b;

//O comum é declarar e inicializar com algum valor padrão
let xoxo = ":**";

// let e var ao ser declaradas tem o valor padrão de undefined
console.log(a);
console.log(b); //undefined


// variavel utilizando const DEVE ser declarada e inicializada por padrão

// const c;   // SyntaxError: Missing initializer in const declaration
const c = 3.1415;
console.log(c);      

/*
Objetos (incluindo arrays e funções)  atribuídos a uma const ainda são mutáveis. 
Usar a declaração const só impede a reatribuição do identificador (nome) da variável.
*/

//Diferenças entre VAR, LET e CONST

// VAR
// Pode ser redeclarada
// Pode ter o valor atualizado

// Tem Escopo:
// Global
// De função


// LET
// Não pode ser redeclarada
// Pode ter o valor atualizado

// Tem Escopo:
// De função
// De bloco

// CONST

// Não pode ser redeclarada
// Não pode ter o valor atualizado

// Tem Escopo:
// De função
// De bloco

