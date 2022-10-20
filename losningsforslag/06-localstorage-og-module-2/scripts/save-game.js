import GameModule from "./modules/GameModule.js";

const titleTxt = document.querySelector("#title-txt");
const priceTxt = document.querySelector("#price-txt");
const consoleTxt = document.querySelector("#console-txt");
const saveGameBtn = document.querySelector("#save-game-btn");
const gameOutput = document.querySelector("#game-output");

const saveGame = () => {
    const title = titleTxt.value;
    const price = parseInt( priceTxt.value ); // Bruker parseInt for å gjøre om til et ordentlig tall
    const console = consoleTxt.value;

    // TODO: check if input fields are filled out
    const newGame = { title: title, price: price, console: console };
    GameModule.saveGame( newGame );
}

saveGameBtn.addEventListener("click", saveGame);