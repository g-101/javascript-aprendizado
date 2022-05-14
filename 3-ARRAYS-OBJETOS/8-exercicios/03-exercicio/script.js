// Crie um objeto onibus
// Com as propriedades: rodas = 8, limite de passageiros = 40, portas = 2, 
// imprima todas as propriedades no console


const onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2,
}

const keys = Object.keys(onibus)
keys.forEach((key, index) => {
    console.log(`${key}: ${onibus[key]}`)
})

