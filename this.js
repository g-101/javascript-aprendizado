// o this é uma keyword especial que funciona de acordo com o contexto de execução
// o this pega o valor e aponta para o "dono" da função em que o this está sendo executado

// O this no contexto de método:
const cat = {
    name: "Maru",
    color: "yellow",
    meow: function (){
        console.log(`${this.name} says meowww`);
        // aponta para o "dono" que é o objeto cat, no atributo/propriedade name.
        // eu acho que o mais seguro é usar o this em uma regular function no contexto de objeto.
    },
    checkColor: () => {
        console.log(`${this.name} is ${this.color}`);
        // this não funciona com arrow functions
    },
}
cat.meow();


