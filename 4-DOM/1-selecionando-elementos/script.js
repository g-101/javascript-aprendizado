// pega pelo id e altera o conteudo do elemento
document.getElementById("exemplo").innerHTML = "Suga <button>hahah</button>"
// pega os elementos pelo nome da classe
document.getElementsByClassName("lista")
// pega os elementos pelo parametro name (utlizado em campos de texto)
document.getElementsByName("email")

//querySelector
// consegue selecionar por id, class, name
document.querySelector("#exemplo")
// pega o primeiro elemento
document.querySelector(".lista")

// pega mais de um elemento com essa class
document.querySelectorAll(".lista")