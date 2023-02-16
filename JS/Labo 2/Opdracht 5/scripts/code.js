const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", change);
}

const change = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);