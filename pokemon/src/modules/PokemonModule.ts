import IPokemon from "../interfaces/IPokemon";

const PokemonModule = (
  () => {
    
    const pokemons:IPokemon[] = [
      {
        id: 25,
        name: "Pikachu",
        type: ["Electric"]
      },
      {
        id: 54,
        name: "Psyduck",
        type: ["Water", "Psychic"]
      }
    ];

    const getAll = () :IPokemon[] => pokemons;

    const getPokemonById = (id: number) :IPokemon => {
      const selectedPokemon = pokemons.find(pokemon => pokemon.id === id)
      return selectedPokemon as IPokemon;
    }

    return {
      getAll, getPokemonById
    }

  }
)();

export default PokemonModule;