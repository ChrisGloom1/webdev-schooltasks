import GameModule from "./modules/GameModule.js";

const idTxt = document.querySelector("#id-txt");
const titleTxt = document.querySelector("#title-txt");
const gameOutput = document.querySelector("#game-output");
const getGameByIdBtn = document.querySelector("#get-game-by-id-btn");
const updateGameBtn = document.querySelector("#update-game-btn");

const getGameById = () => {
    const id = parseInt( idTxt.value );
    const game = GameModule.getGameById( id );
    titleTxt.value = game.title;
}

const updateGame = () => {
    const id = parseInt( idTxt.value );
    const title = titleTxt.value;
    GameModule.updateTitle( id, title );
}

const showAllGames = () => {

    const gameArray = GameModule.getAll();

    let htmlTxt = "";       

    if( gameArray.length > 0){
        gameArray.forEach( game => {
            htmlTxt += `
                <article>
                    <h3>${game.title} (${game.id})</h3>
                    <p>Pris: ${game.price}</p>
                    <p>Konsoll: ${game.console}</p>
                </article>
            `;
        })
    }else{
        htmlTxt = "<p>Det er ikke lagret noe spill i localStorage enda!</p>";
    }

    gameOutput.innerHTML = htmlTxt;
}

(
    () => {
        showAllGames();
    }
)();

getGameByIdBtn.addEventListener("click", getGameById);
updateGameBtn.addEventListener("click", () => { 
    updateGame();
    showAllGames();
});
