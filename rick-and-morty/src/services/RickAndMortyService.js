import axios from 'axios';

const RickAndMortyService = (
    () => {

      const endpoints = { // main endpoints
        "characters": "https://rickandmortyapi.com/api/character",
        "locations": "https://rickandmortyapi.com/api/location",
        "episodes": "https://rickandmortyapi.com/api/episode"
      }

      // Async får js til å vente til http req er ferdig - brukes for enpoints
      const getAllCharacters = async () => {
        const response = await axios.get(endpoints.characters);
        return response.data.results;
      }
      
      const getAllLocations = async () => {
        const response = await axios.get(endpoints.locations);
        console.log(response);
      }

      return{
        getAllCharacters, getAllLocations
      }
  }
)();
export default RickAndMortyService;