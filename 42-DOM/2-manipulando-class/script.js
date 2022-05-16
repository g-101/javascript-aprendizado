function clear() {
    document.querySelector("#exemplo").classList.value = ""
}

document.querySelector(".btGreen").addEventListener("click", () => {
    clear()
    document.querySelector("#exemplo").classList.add("btGreen")
})

document.querySelector(".btRed").addEventListener("click", () => {
    clear()
    document.querySelector("#exemplo").classList.add("btRed")
})

document.querySelector(".btBlue").addEventListener("click", () => {
    clear()
    document.querySelector("#exemplo").classList.add("btBlue")
})
