function changeMenu() {
    const menuArea = document.querySelector("#menu-area");
    if(menuArea.classList.contains("menu-opened")) {
        
        menuArea.classList.remove("menu-opened"); 
        menuArea.classList.add("menu-closed"); 
        
    }
    else {
        menuArea.classList.remove("menu-closed"); 
        menuArea.classList.add("menu-opened"); 
    }
}

function main() {
    document.getElementById("menu-opener").addEventListener("click", () => changeMenu());
}
main()