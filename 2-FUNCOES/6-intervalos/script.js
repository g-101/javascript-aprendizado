// setTimeout serve para executar ou retardar um codigo 
// de acordo com um intervalo de tempo definido


const timer = function () {
    setTimeout(() => {
        document.querySelector(".demo").innerHTML = "Rodou"
    }, 2000)
    
}
function stop() {
    clearTimeout(timer)
    document.querySelector(".demo").innerHTML = "Parou"
}

document.querySelector("#btStart").addEventListener("click", timer)
document.querySelector("#btStop").addEventListener("click", stop)