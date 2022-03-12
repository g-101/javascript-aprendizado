// Higher oder functions são funções que operam com outras funções
// Aceitam funções como argumento
const die = function rollDie() {
    console.log(Math.floor( Math.random() * 6 + 1 ) );
}
function callTwice(func) {
    func();
    func();
}

callTwice(die);

// Retornam uma função
function makeMysteryFunc() {
    if(Math.random > 0.5) {
        return function() {
            console.log("CONGRATS I'M A GOOD FUNCTION");
        }
    }
    return function() {
        console.log("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
    }
}
makeMysteryFunc();