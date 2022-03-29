class Gato {
    constructor(patas=4, corPelo) {
        this.patas = patas;
        this.corPelo = corPelo;
    }
    miar() {
        return "meoww";
    }
}

const maru = new Gato("amarelo");
console.log(maru.patas);
console.log(maru.miar());