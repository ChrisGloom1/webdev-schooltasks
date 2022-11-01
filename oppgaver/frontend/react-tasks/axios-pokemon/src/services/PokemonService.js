import axios from "axios";

const PokemonService = (
  () => {

    const endpoint = {
      "pokemon" : "https://pokeapi.co/api/v2/pokemon",
    }

    const getPokemonNames = async () => {
      const response = await axios.get(endpoint.pokemon);
      return response.data.results;
    }

    return(
      getPokemonNames
    )

  }
)();
export default PokemonService;