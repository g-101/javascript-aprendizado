// o this é uma keyword especial que funciona de acordo com o contexto de execução
// o this pega o valor e aponta para o "dono" da função em que o this está sendo executado

// O this no contexto de método:
const cat = {
    name: "Maru",
    color: "yellow",
    meow(){
        console.log(`${this.name} says meowww`);
        // aponta para o "dono" que é o objeto cat, no atributo/propriedade name.
    }
}
cat.meow();


