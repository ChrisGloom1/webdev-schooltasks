/*
    ***
    Arrays, HTML objects
    ***
*/

/*
    Bruker lower camelCasing på variabel og funksjonsnavn. 
    const står for constant som betyr at datatypen ikke kan endres på, og heller ikke kan opprinnelig array byttes ut. Derimot kan man for eksempel pushe (push()) nye objekter inn i arrayet i ettertid.        
*/
const cuteMonsters = [ { 
        name: "Dracula", 
        age: 30, 
        image: "cute-dracula.png",
        living: false
    },
    {
        name: "Frankenstein",
        age: 120,
        image: "cute-frankenstein.png",
        living: true
    },
    {
        name: "Ghost Viking",
        age: 1000,
        image: "cute-ghost.png",
        living: false
    }
];


// Med querySelector kan man bruke alle CSS-velgere for å få tak i elementer
const showAllMonstersBtn = document.querySelector("#show-all-monsters-btn"); // alternativt har man querySelectorAll()
const monsterSection = document.querySelector("#monster-section");

/*
    ***
    Functions
    ***
*/
const showAllMonsters = () => {
    
    let htmlText = "";

    cuteMonsters.forEach( ( monster ) => {  // "For hvert monster i cuteMonsters-arrayet"

        htmlText += `
            <article class="col-6 col-sm-4">
                <h3>${ monster.name }</h3>
                <img class="responsive-image" src="images/${ monster.image }">
            </article>
        `;

        // I template literal over ser vi at vi gir CSS-klasser til <article> for å ta i bruk et CSS Grid-system (ikke laget i denne koden)

    } );

    monsterSection.innerHTML = htmlText;

}


/*
    ***
    Event setting
    ***
*/
showAllMonstersBtn.addEventListener("click", showAllMonsters);

