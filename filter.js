// cria um novo array com todos os elementos que passaram no teste
const numbers = [0, 3, 4, 9, 99];
//vai retornar todos os numeros menor que 5
const smallNumbers = numbers.filter(n => n < 5);
console.log(smallNumbers);

const validNumbers = numbers => numbers.filter(n => n < 5);
console.log(validNumbers(numbers));