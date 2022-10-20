/*
    Importerer FC (Functional Component)-dekorasjonen for å definere IPokemon som props.
    Importerer IPokemon.
*/
import {FC} from 'react';
import IPokemon from "../../interfaces/IPokemon";

const PokemonItem:FC<IPokemon> = ({id, name, type}) => {

    const getTypeLis = () => {
        return type?.map( (_type, i) => ( <li key={`type-${i}`}>{_type}</li> ) );
    }

    return (
        <article>
            <h3>{name} ({id})</h3>
            <ul>
                { type != null ? getTypeLis() : "Ingen type angitt."}
            </ul>
        </article>
    )
}

export default PokemonItem;