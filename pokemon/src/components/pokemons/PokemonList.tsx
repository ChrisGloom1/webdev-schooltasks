import IPokemon from "../../interfaces/IPokemon";
import { useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import PokemonModule from "../../modules/PokemonModule";

const PokemonList = () => {

  const [pokemons, setPokemons] = useState<IPokemon[] | null>(null);

  useEffect( () => {
    setPokemonsFromModule();
  }, [] )

  const setPokemonsFromModule = () => {
    setPokemons(PokemonModule.getAll);
  }

  const getPokemonItems = () => {
    return pokemons?.map((pokemon, i) => (
      <PokemonItem 
      key={`pokemon-${i}`}
      id={pokemon.id}
      name={pokemon.name}
      type={pokemon.type}
      />
    ))
  }

  return(
    <section>
      <h1>Her kommer påkedudes</h1>
      <section>{getPokemonItems()}</section>
    </section>
  )
}

export default PokemonList;