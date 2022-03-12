const numbers = [1, 2, 3, 4, 5, 6];
const chars = 'hello'
const isEven = numbers.forEach(function (n) { 
    return n % 2 == 0 ;

});
// The forEach() metodo itera sobre os elementos de um array
// e executa uma função predefinada em cada elemento.
const lchars = chars.forEach(function (e) { 
    return e ;

});

console.log(isEven);
console.log(lchars);

