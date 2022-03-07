function collectEggs() {
    // dentro das funções temos nossas variaveis locais
    let eggs = 6;
    console.log(eggs);
}
// console.log(eggs);        // ReferenceError: eggs is not defined
// eggs foi criada dentro da função, por isso pertence ao escopo da função
// e não pode ser acessada fora da função

collectEggs();