// Normalmente você usa o for loop para interar em cada elemento 
// e inserir o elemento em um novo array
function isEven() {
    const newArr = [];
    for(let i = 0; i < 10; i++) {
        if ( i % 2 == 0) {
            newArr.push(i);
        }    
    }
    return newArr
}
console.log(isEven());

// map() chama uma função callback em cada elemento do array
// e retornar um novo array com os elementos modificados
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
const firstNames = fullNames.map(function(name) {
    return `${name.first}`;
})
console.log(firstNames);


// o map() não muda o array original, 
// retorna um novo array com todos os elementos transformados pela função callback