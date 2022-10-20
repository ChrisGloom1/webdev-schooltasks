// Moduler skrives gjerne på en litt annen måte (her med stor forbokstav) for å gjøre det veldig tydelig at de er en egen kategori av JS-fil

const SuperheroModule = ( () => { // IIFE - Immediately Invoked Function Expression - selvkallende funksjon

    // Informasjonsbasen
    const superheroes = [
        {
            name: "Amazing Woman",
            image: "amazing-woman.png",
            good: true
        },
        {
            name: "Green Cape",
            image: "green-cape.png",
            good: false
        },
        {
            name: "Shield",
            image: "shield.png",
            good: true
        },
        {
            name: "Something",
            image: "something.png",
            good: false
        },
        {
            name: "Vampire Man",
            image: "vampire-man.png",
            good: true
        }
    ];

    // Funksjoner
    const getAll = () => superheroes.map( 
        superhero => { return { ...superhero } } 
    ); // Spread operator - sprer objektene inn i et nytt array

    const getEvil = () => {
        let evilSuperheroes = superheroes.filter( 
            superhero => superhero.good === false 
        );
        return evilSuperheroes;
    }

    // Dynamisk sortering ved å endre på variabler?: let sortValue1 = 1; let sortValue2 = -1;
    const sortSuperheroesByGood = () => {

        // først bruke map for å skape klone av original og sortere og returnere den
        let sortedSuperheroes = superheroes.sort(
            ( superhero1, superhero2 ) => superhero1.good < superhero2.good ? 1 : -1
        );
        return sortedSuperheroes;
    }

    // Tilgjengeliggjøring av funksjoner og variabler osv. Det som ikke returneres blir fullstendig usynlig og utilgjengelig utenfor modulens kropp
    return {
        getAll,
        getEvil,
        sortSuperheroesByGood
    }

} )();

export default SuperheroModule; // eksporterer modulen for å kunne importere den inn i andre JS-filer der hvor den trengs