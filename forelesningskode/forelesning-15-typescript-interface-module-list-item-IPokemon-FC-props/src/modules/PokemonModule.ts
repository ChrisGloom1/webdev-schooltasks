import IPokemon from "../interfaces/IPokemon";

const PokemonModule = (
    () => {

        // Presiserer at det er et array som inneholder Pokemon-objekter (angitt ved hjelp av interfacet IPokemon)
        const pokemons:IPokemon[] = [
            {
                id: 1000,
                name: "Pikachu",
                type: ["Lightning"]
            },
            {
                id: 1001,
                name: "Psyduck",
                type: ["Water", "Psychic"]
            }
        ];    

        // Funksjonen getAll blir definert som en funksjon som skal returnere IPokemon array; noe "pokemons" er her.
        const getAll = () : IPokemon[] => pokemons;

        // Funksjonen getPokemonById har 1 parameter som er id som er et tall. Den returnerer 1 Pokemon-objekt.
        const getPokemonById = (id: number) : IPokemon  => {
            const selectedPokemon = pokemons.find( pokemon => pokemon.id === id );
            return selectedPokemon as IPokemon;
        }

        return {
            getAll,
            getPokemonById
        }

    }
)();

export default PokemonModule;