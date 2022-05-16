function changeImage(filename, animal) {
    document.querySelector(".image").setAttribute("src", `./images/${filename}`)
    document.querySelector(".image").setAttribute("alt", animal)
}

function main() {
    document.querySelector("#btRabbit").addEventListener("click", () => changeImage("coelho.jpg", "coelho preto e branco") )
    document.querySelector("#btCat").addEventListener("click", () => changeImage("gato.jpg", "gato cinza") )

}
main()
