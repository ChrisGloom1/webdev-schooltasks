
import {useState, useEffect} from 'react'
import CharacterItem from "./CharacterItem";
import RickAndMortyService from "../../services/RickAndMortyService";

const CharacterList = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(
    () => {
      setCharactersFromService();
    }, []
  )

  const setCharactersFromService = async () => {
    const charactersFromService = await RickAndMortyService.getAllCharacters();
    setCharacters(charactersFromService);
    console.log(characters);
  }

  const getCharacterItems = () => {
    return characters.map( character => {
      return <CharacterItem
      key={character.id}
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}      
      />
    })
  }

  return(
    <section>
      <h3>Rick and Morty characters</h3>
      <section>{getCharacterItems()}</section>
    </section>
  )
}

export default CharacterList;