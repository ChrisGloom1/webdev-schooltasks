import { useEffect } from "react";
import { useState } from "react";
import PokemonItem from "./PokemonItem";
import PokemonService from "../services/PokemonService";

const PokemonList = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(
    () => {
      setPokemonFromService();
    }, []
  )

  const setPokemonFromService = async () => {
    const pokemonFromService = await PokemonService.getPokemonNames();
    setPokemon(pokemonFromService)
  }

  const getPokemonItems = () => {
    return pokemon.map((pokemon, i) => {
      return <PokemonItem
      key={`p-${i}`}
      name={pokemon.name}
      />
    })
  }

  return(
    <section>
      <h3>Pokenames</h3>
      <section>{getPokemonItems()}</section>
    </section>
  )
}

export default PokemonList;