import IPokemon from "../../interfaces/IPokemon";
import { useState, useEffect } from "react"; // Henter inn useState for å ha pokemons som en tilstand til komponenten.
import PokemonItem from "./PokemonItem"; // Henter inn PokemonItem: å generere Item-komponenter er hovedmålet med List-komponenten.
import PokemonModule from "../../modules/PokemonModule"; // Henter inn Module for å ha tilgang til informasjonen som ligger i Module.

const PokemonList = () => {

    /*
        pokemons er tilstanden (array med pokemons) 
        setPokemons er en funksjon
        Sagt på en annen måte: det første man legger til i firkantklammene er tilstanden, den andre tingen gjøres til en funksjon for å endre på tilstanden.
    */
    const [pokemons, setPokemons] = useState<IPokemon[] | null>(null); // pokemons inneholder enten array med IPokemon (Pokemon-objekter) eller null (ikke satt)

    useEffect( () => { 
        setPokemonsFromModule(); // Når siden/komponenten laster settes tilstanden pokemons.
    }, [] )

    const setPokemonsFromModule = () => {
        setPokemons( PokemonModule.getAll() );
    }

    const getPokemonItems = () => {
        return pokemons?.map( (pokemon, i) => (
            <PokemonItem 
                key={`pokemon-${i}`}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                />
        ) )
    }
    return (
        <section>
            <h1>Her kommer Pokemons</h1>
            <section>{ getPokemonItems() }</section>{/* Skriver ut alle Pokemons til nettsiden. */}
        </section>
    )
}

export default PokemonList;