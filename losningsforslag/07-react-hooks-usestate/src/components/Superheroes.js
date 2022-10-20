import React, { useState } from 'react';

const Superheroes = () => {

    const [ superheroes, setSuperheroes ] = useState([]);
    const [ newSuperhero, setNewSuperhero ] = useState("");

    const handleChange = (e) => {
        setNewSuperhero( e.target.value );
    }

    const addSuperhero = () => {
        setSuperheroes( [...superheroes, newSuperhero] );
    }

    const getSuperheroes = () => {
        return superheroes.map( ( superhero, i ) => {
            return <li key={`s-${i}`}>{ superhero }</li>
        });
    }

    return(
        <section>
            <h3>Task 4: Add Superheroes</h3>
            <label>Superhero name</label>
            <input onChange={ handleChange } type="text"/>
            <input onClick={ addSuperhero } type="button" value="Add superhero" />
            <p>Number of superheroes: { superheroes.length }</p>
            <ul>
                { getSuperheroes() }
            </ul>
        </section>
    )
}

export default Superheroes;