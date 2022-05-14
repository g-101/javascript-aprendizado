// Adicione a propriedade janelas no objeto onibus, com valor 20
// Delete a propriedades rodas
// imprima a propriedades janelas no console


const onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2,
}

onibus.janelas = 20
delete onibus.rodas
console.log(onibus.janelas)



