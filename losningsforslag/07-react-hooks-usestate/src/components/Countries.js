import React, { useState } from 'react';

const Countries = () => {

    const [ countries, setCountries ] = useState([]);
    const [ newCountry, setNewCountry ] = useState({});

    const getCountries = () => {
        return countries.map( (country, i) => {
            return <li key={`c-${i}`}>Country: { country.name }, capital: { country.capital }</li>
        });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setNewCountry( { ...newCountry, [name]: value } );
    }

    const addNewCountry = () => {
        setCountries([...countries, newCountry]);
    }

    return(
        <section>
            <h3>Task 7, Countries.js: Adding objects to an array</h3>
            <h4>Add countries and their capitals</h4>
            <p>Number of countries: { countries.length }</p>
            <label>Country</label>
            <input onChange={ handleChange } name="name" type="text"/>
            <label>Capital</label>
            <input onChange={ handleChange } name="capital" type="text"/>
            <input onClick={ addNewCountry } type="button" value="Add country"/>
            <ul>
                { getCountries() }
            </ul>
        </section>
    )
}

export default Countries;