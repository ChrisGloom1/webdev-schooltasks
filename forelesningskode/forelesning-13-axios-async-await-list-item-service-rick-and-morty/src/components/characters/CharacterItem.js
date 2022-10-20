/*
    Item-komponenter genereres (vanligvis) av List-komponenter.
    Item-komponenten har ansvaret for å bestemme hvordan noe (en karakter fra Rick and Morty i dette tilfellet) skal se ut.
    Med "se ut" menes: hvilken informasjon, hvilke tager, hvilken stilsetting.
*/
const CharacterItem = ({name, status, image}) => { // Kan ta imot 3 props
    return (
        <article className="col">{ /* TODO: Må stilsette CharacterItem */ }
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <img src={image} alt="Bildetekst. mer kommer"/>
        </article>
    )
}

export default CharacterItem;