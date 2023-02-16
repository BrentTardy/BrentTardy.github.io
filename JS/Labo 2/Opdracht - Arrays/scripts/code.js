const setup = () => {
}
window.addEventListener("load", setup);

const familieleden = ["Shinji", "Asuka", "Toji", "Rei", "Mari"];
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

function VoegNaamToe() {
    let answer = prompt("Voeg een naam toe.", "Misato");
    familieleden.push(answer);
}
VoegNaamToe();
console.log(familieleden);

let leden = familieleden.toString();
console.log(leden);
