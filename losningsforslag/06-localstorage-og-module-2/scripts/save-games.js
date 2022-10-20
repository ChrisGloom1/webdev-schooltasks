import GameModule from "./modules/GameModule.js";

const titleTxt = document.querySelector("#title-txt");
const priceTxt = document.querySelector("#price-txt");
const consoleTxt = document.querySelector("#console-txt");
const addGameToArrayBtn = document.querySelector("#add-game-to-array-btn");
const saveGameBtn = document.querySelector("#save-game-btn");
const gameOutput = document.querySelector("#game-output");

/*
<button id="add-game-to-array-btn">Legg spillet i listen (array)</button>  
            <button id="save-game-btn">Lagre alle spillene i localStorage</button>
*/

const temporaryGameArray = [];

const addGameToArray = () => {
    const title = titleTxt.value;
    const price = parseInt( priceTxt.value ); // Bruker parseInt for å gjøre om til et ordentlig tall
    const console = consoleTxt.value;

    const newGame = { title: title, price: price, console: console };
    temporaryGameArray.push( newGame );
}

const saveGame = () => {    
    GameModule.saveGames( temporaryGameArray );    
    temporaryGameArray.splice(0);
}

const showAllGames = () => {
    let htmlTxt = "";       

    temporaryGameArray.forEach( game => {
        htmlTxt += `
            <article>
                <h3>${game.title}</h3>
                <p>Pris: ${game.price}</p>
                <p>Konsoll: ${game.console}</p>
            </article>
        `;
    })

    gameOutput.innerHTML = htmlTxt;
}

addGameToArrayBtn.addEventListener("click", ()=> {
    addGameToArray();
    showAllGames();
});

saveGameBtn.addEventListener("click", () => {
    saveGame();
    showAllGames();
});