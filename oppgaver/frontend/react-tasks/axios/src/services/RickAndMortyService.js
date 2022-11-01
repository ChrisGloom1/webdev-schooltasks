import axios from 'axios';

const RickAndMortyService = (
  () => {

    const endpoint = {
      "character" : "https://rickandmortyapi.com/api/character"
    }

    const getAllCharacters = async () => {
      const response = await axios.get(endpoint.character);
      return response.data.results;
    }
  
    return {
      getAllCharacters
    }
  }
)();

export default RickAndMortyService;