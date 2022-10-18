import { FC } from "react";
import IPokemon from "../../interfaces/IPokemon";

const PokemonItem:FC<IPokemon> = ({id, name, type}) => {

  return(
    <article>
      <h3>{name} ({id})</h3>
      
    </article>
  )
}

export default PokemonItem;