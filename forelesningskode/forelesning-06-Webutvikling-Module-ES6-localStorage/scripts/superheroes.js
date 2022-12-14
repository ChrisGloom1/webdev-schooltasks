import SuperheroModule from "./modules/SuperheroModule.js"; // importerer SuperheroModule inn i superheroes.js slik at vi har tilgang til all dens funksjonalitet

/*
    ***
    HTML objects
    ***
*/

/*
    <button id="show-all-btn">Vis alle</button>
    <button id="show-bad-guys-btn">Vis slemme</button>
    <button id="show-good-guys-btn">Vis snille</button>
    <button id="show-sorted-by-good-btn">Vis sortert etter snill</button>
*/

const showAllBtn = document.querySelector("#show-all-btn");
const showBadGuysBtn = document.querySelector("#show-bad-guys-btn");
const showGoodGuysBtn = document.querySelector("#show-good-guys-btn");
const showSortedByGoodBtn = document.querySelector("#show-sorted-by-good-btn");
const superheroesOutput = document.querySelector("#superheroes-output");


/*
    ***
    Functions
    ***
*/
const showSuperheroes = ( array ) => { // Arrow function med 1 parameter. Funksjonen tar imot en array som den så looper gjennom med foreach for å skape innhold på nettsiden.
    
    let htmlTxt = "";

    array.forEach( superhero => { 
        htmlTxt += `
            <article>
                <h3 class="${ superhero.good ? "superhero__title--good" : "superhero__title--evil" }">${ superhero.name }</h3>
                <img src="images/${ superhero.image }">
            </article>
        `;
    } )

    // Teknikken brukt over i h3 heter Ternary operator: ${ betingelse ? "Hvis betingelse er sann" : "Hvis betingelse ikke er sann" }

    superheroesOutput.innerHTML = htmlTxt;
}


/*
    ***
    Event setting
    ***
*/
const showAll = () => showSuperheroes( SuperheroModule.getAll() );

// showAllBtn.addEventListener( "click",  showAll );

showAllBtn.addEventListener( 
    "click", 
    () => showSuperheroes( SuperheroModule.getAll() )  
);

showBadGuysBtn.addEventListener( 
    "click",
    () => showSuperheroes( SuperheroModule.getEvil() ) 
);

showSortedByGoodBtn.addEventListener( 
    "click", 
    () => showSuperheroes( SuperheroModule.sortSuperheroesByGood() )     
);

























//showSuperheroes( SuperheroModule.getAll() );  Her sender vi inn et array til funksjonen showSuperheroes som vi får fra getAll-funksjonen i SuperheroModule.