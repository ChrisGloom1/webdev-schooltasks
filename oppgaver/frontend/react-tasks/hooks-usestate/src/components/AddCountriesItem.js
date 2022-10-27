import { useState } from "react";

const AddCountriesItem = () => {

  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState({})

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setNewCountry({...newCountry, [name]: value})
  }

  const addNewCountry = () => {
    setCountries([...countries, newCountry])
  }

  const getCountries = () => {
    return countries.map((country, i) => {
      return <li key={`c-${i}`}>Country: {country.name}, capital: {country.capital}</li>
    })
  }

  return(
    <section>
      <h3>Task 7: Adding obj in array in state</h3>
      <p>Add countries and their capital</p>
      <p>Number of capitals: {countries.length}</p>
      <span>Country: </span>
      <input onChange={changeHandler} type="text" name="country" />
      <span> Catpital: </span>
      <input onChange={changeHandler} type="text" name="capital" />
      <button onClick={addNewCountry}>Add</button>
      <ul>{getCountries()}</ul>
    </section>
  )
}

export default AddCountriesItem;