// Crie um JSON com 3 propriedades
// Atribuia ele a uma variavel
// Acesse as propriedades, imprimindo no console

const cat = {
    "name": "maru",
    "color": "yellow",
    "age": 5,
}
const keys = Object.keys(cat) // coloca as chaves em um array

keys.forEach((key, index) => {
    console.log(`${key}: ${cat[key]}`)
})