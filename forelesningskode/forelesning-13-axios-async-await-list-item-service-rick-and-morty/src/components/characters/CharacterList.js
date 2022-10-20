/*
    Importerer 2 React hooks, CharacterItem og RickAndMortyService
*/
import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import RickAndMortyService from "../../services/RickAndMortyService";


/*
    List-komponenter har ansvaret for:
    1. å få tilgang til informasjon; i dette tilfellet fra RickAndMortyService, som igjen får tak i informasjon fra RickAndMorty Apiet.
    2. generere Item-komponenter
*/
const CharacterList = () => {

    const [characters, setCharacters] = useState([
        { name: "Odnalor", status: "Alive", image: "bilde" } // En dummy-karakter som ligger der før vi får ordentlig informasjon fra Service
    ]);

    useEffect( () => { // useEffect er en Hook som gjør at noe skal skje 1 gang og ikke hver gang komponenten rendres (skapes)
        setCharactersFromService();
    }, [] );


    /*
        Denne funksjonen gjør bruk av RickAndMortyService for å få tak i alle karakterer.
        Den må også gjøres async-await siden Servicen tar x mengde tid. 
    */
    const setCharactersFromService = async () => {
        const charactersFromService = await RickAndMortyService.getAllCharacters();
        setCharacters( charactersFromService ); 
    }

    // Funksjonen som genererer og returnerer alle CharacterItems. Disse skrives ut i JSX i return-delen nederst i komponenten.
    const getCharacterItems = () => {
        return characters.map( (character, counter) => (
            <CharacterItem 
                key={`character-${counter}`} // Må huske key når man genererer mange JSX-komponenter dynamisk
                name={character.name}
                status={character.status}
                image={character.image}
                />
        ) );
    }

    return (
        <section>
            <h3>Rick & Morty-karakterer</h3>
            <section>{getCharacterItems()}</section> { /* Her kalles funksjonen getCharacterItems og funksjonen returnerer x antall CharacterItems som blir lagt til i seksjonen. */ }
        </section>
    )
}

export default CharacterList;