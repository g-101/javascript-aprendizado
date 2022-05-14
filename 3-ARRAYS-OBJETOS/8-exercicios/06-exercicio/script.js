// Crie dois arrays, um com mais de 5 elementos e outro com menos
// Crie uma função que verifica o numero de elementos
// Se possuir menos que 5, imprima "poucos elementos"
// se não imprima "muitos elementos"

const arr = ["Rony", "Harry", "Hermione", "Hagrid", "Genesis", "Yoongi"]
const sope = ["Hoseok", "Yoongi"]

function checkLength(arr) {
    return arr.length < 5 ? "poucos elementos" : "muitos elementos"
}

console.log(checkLength(arr))
console.log(checkLength(sope))

