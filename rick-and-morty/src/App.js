import RickAndMortyService from "./services/RickAndMortyService";
import CharacterList from "./components/characters/CharacterList";

function App() {

  RickAndMortyService.getAllCharacters();
  // RickAndMortyService.getAllLocations();
  
  return (
    <div>
      <h1>Rick and Morty boiiis</h1>
      <CharacterList />
            
    </div>
  );
}

export default App;