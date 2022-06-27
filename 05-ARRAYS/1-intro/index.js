/* 
    O que são arrays?
    São listas que armazenam multiplos valores em ordem sequencial

    Cada valor é acessado pelo seu index(posição)
    O index começa no zero e o ultimo é o tamanho do array menos um 

    Um Array pode ser vazio ou armazenar diferentes tipos de valores
    Arrays são mutaveis

*/

// Declarando um array vazio
const arr = []; // é comum o array ser declarado com const
console.log(arr.length);

// Acessando o valor
const arr2 = [1, 5, 10];
console.log(arr2[1]);
console.log(arr2[arr2.length - 1]);