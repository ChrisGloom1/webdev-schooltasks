import GameModule from "./modules/GameModule.js";

const getAllGamesBtn = document.querySelector("#get-all-games-btn");
const maxPriceTxt = document.querySelector("#max-price-txt");
const getGamesByPriceLowerThanBtn = document.querySelector("#get-games-by-price-lower-than-btn");
const gameOutput = document.querySelector("#game-output");

const getAllGames = () => {
    let htmlTxt = "";
    
    const gameArray = GameModule.getAll();   

    if( gameArray.length > 0 ){

        gameArray.forEach( game => {
            htmlTxt += `
                <article>
                    <h3>${game.title} (id: ${game.id})</h3>
                    <p>Pris: ${game.price}</p>
                    <p>Konsoll: ${game.console}</p>
                </article>
            `;
        })

    }else{
        htmlTxt = "<p>Inget spill i localStorage enda!</p>";
    }

    gameOutput.innerHTML = htmlTxt;
}

const getGamesByPriceLowerThan = () => {

}

getAllGamesBtn.addEventListener("click", getAllGames);
getGamesByPriceLowerThanBtn.addEventListener("click", getGamesByPriceLowerThan);