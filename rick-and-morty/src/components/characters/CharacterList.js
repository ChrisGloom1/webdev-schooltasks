import CharacterItem from "./CharacterItem";
import {useState, useEffect} from "react";
import RickAndMortyService from "../../services/RickAndMortyService";

const CharacterList = () => {

  const [characters, setCharacters] = useState([
    { name: "Rick and Morty", status: "Semi alive", image: "https://i.pinimg.com/474x/af/13/a7/af13a7aeb442443c7b2b1a430395c6a9.jpg" }
  ]);

  useEffect( () => { 
    setCharactersFromService();
  }, [] );

  const setCharactersFromService = async () => {
    const charactersFromService = await RickAndMortyService.getAllCharacters();
    setCharacters( charactersFromService )
  }

  const getCharacterItems = () => {
    return characters.map( (character, counter) => (
      <CharacterItem 
      key={`character-${counter}`}
      name={character.name}
      status={character.status}
      image={character.image}
      />
    ) );
  }

  return (
    <section>
      <h3>Rick and Morty karakterer</h3>
      <section>{getCharacterItems()}</section>
    </section>
  )
}

export default CharacterList