function clear() {
    document.querySelector("#exemplo").classList.value = ""
}
function changeStatusPhone() {
    const phone = document.querySelector("#phone")
    if(phone.style.display === "none" || phone.style.display === "") {
        phone.style.display = "block"
        document.querySelector("#btPhone").setAttribute("value", "Esconder Telefone")
    }
    else {
        phone.style.display = "none" 
        document.querySelector("#btPhone").setAttribute("value", "Mostrar Telefone")
    }
    
}
document.querySelector("#btPhone").addEventListener("click", () => changeStatusPhone() )



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

