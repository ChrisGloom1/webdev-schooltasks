import { useState } from "react";

const SuperheroItem = () => {

  const [superheroes, setSuperheroes] = useState([]);
  const [newSuperhero, setNewSuperhero] = useState("");

  const changeHandler = (e) => {
    setNewSuperhero(e.target.value);
  }

  const addSuperhero = () => {
    setSuperheroes( [...superheroes, newSuperhero] );
  }

  const getSuperheroes = () => {
    return superheroes.map((superhero, i) => {
      return <li key={`s-${i}`}>{superhero}</li>
    })
  }

  return (
    <section>
      <h3>Task 4: Add superheroes</h3>
      <span>Superhero name: </span>
      <input onChange={changeHandler} type="text" />
      <button onClick={addSuperhero}>Add superhero</button>
      <p>Number of superheroes: {superheroes.length}</p>
      <ul>
        {getSuperheroes()}
      </ul>
    </section>
  )
}

export default SuperheroItem;