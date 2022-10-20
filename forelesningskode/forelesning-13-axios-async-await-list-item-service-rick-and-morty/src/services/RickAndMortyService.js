import axios from 'axios';

const RickAndMortyService = (
    () => {


        /*
            Et endepunkt er i praksis en metode eller funksjon i et (Web) Api som trigges når den blir kalt på med HTTP request (GET, POST, PUT, DELETE)
        */

        const endpoints = { // Hovedendepunkter (men ikke de eneste) i Rick and Morty Apiet
            "characters": "https://rickandmortyapi.com/api/character",
            "locations": "https://rickandmortyapi.com/api/location",
            "episodes": "https://rickandmortyapi.com/api/episode"
        }

        /*
            async og await er en teknikk som man må innføre når man skal ha resultater fra et API.
            async markerer funksjonen som asynkron (engelsk: asynchronous).
            await nedenfor gjør at JavaScript venter med å legge resultat inn i response-variabelen til når axios HTTP request er ferdig.
            axios HTTP requesten må bokstavelig talt "fly" over internett til en server et annet sted i verden, få resultat, og "fly" hele veien tilbake.
        */
        const getAllCharacters = async () => { 
            const response = await axios.get(endpoints.characters);
            return response.data.results;
        }

        // TODO: getAllLocations- og getAllEpisodes-funksjon 

        return {
            getAllCharacters
        }

    }
)();

export default RickAndMortyService;