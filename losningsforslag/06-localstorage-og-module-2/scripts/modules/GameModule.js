const GameModule = (
    () => {

        /*
            Name of item in localStorage
        */
        const itemName = "games";

        const getAll = () => {
            return getLocalStorageOrEmptyArray();
        }

        const getGameById = (id) => {
            const gameArray = getLocalStorageOrEmptyArray();
            return gameArray.find( game => game.id === id);
        }

        const getGamesByPriceLowerThan = (maxPrice) => {
            const gameArray = getLocalStorageOrEmptyArray();
            return gameArray.filter( game => game.price <= maxPrice);
        }

        const saveGame = (newGame) => {
            const gameArray = getLocalStorageOrEmptyArray();
            newGame.id = Math.floor( Math.random() * 999999 ); // Ikke optimal måte å lage id på siden det er en viss risiko at man får like id'er, men vises her som et konsept.
            gameArray.push( newGame );
            localStorage.setItem( itemName, JSON.stringify( gameArray ) );
        }

        const saveGames = (newGames) => {            
            newGames.forEach( game => game.id = Math.floor( Math.random() * 999999 ) ); // gir de nye spillene id

            const gameArray = getLocalStorageOrEmptyArray(); // får tak i spillene som ligger i localStorage

            const mergedArray = gameArray.concat( newGames ); // concat "merger" (fusjonerer) en array med den andre. Kunne evt. også brukt spread-operator [...gameArray, ...newGames]
            localStorage.setItem( itemName, JSON.stringify( mergedArray ) );
        }       

        const updateTitle = (id, title) => {
            const gameArray = getLocalStorageOrEmptyArray();
            const gameToUpdate = gameArray.find( game => game.id === id);
            gameToUpdate.title = title;
            localStorage.setItem( itemName, JSON.stringify( gameArray ) );
        }

        /** Dette er en måte å få ekstra intellisense på denne funksjonen; hovre over getLocalStorageOrEmptyArray() i getAll-funksjonen for å teste.
         * Mer info her: https://jsdoc.app/
         * @returns parsed movie array from localStorage or empty string
        */
        const getLocalStorageOrEmptyArray = () => {
            if( localStorage.getItem( itemName ) != null ){
                const gameArray = JSON.parse( localStorage.getItem(itemName) );
                return gameArray;
            }else{
                return [];
            }
        }

        return { 
            getAll,
            getGameById,
            getGamesByPriceLowerThan,
            saveGame,
            saveGames,
            updateTitle
        }

    }
)()

export default GameModule;