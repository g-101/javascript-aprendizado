// O que destructing em objetos?
// uma forma de armazenar os valores das propriedades em variaveis



const obj = {
    rodas : 4,
    portas : 4,
    tetoSolar : true,
    motor : "2.0",
}
console.log("\nDestructing em objetos")
const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor} = obj
console.log(vRodas)
console.log(vTetoSolar)
console.log(vMotor)
// Destructing em arrays
console.log("\nDestructing em arrays")
const arr = [5, 99.7, false, -1]
const [v1, v2, v3, v4] = arr 
console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)