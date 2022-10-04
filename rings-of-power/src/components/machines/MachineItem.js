import { useState } from "react";

export const MachineItem = () => { // Explicit export 

  let machine1 = "Katapult";
  let [machine2, setMachine2] = useState("Tom");
  let [machine3, setMachine3] = useState("Tom igjen")
  let [ent, setEnt] = useState("Ingen Ent satt")

  const setMachine2And3 = () => {
    setMachine2Handler();
    setMachine3Handler();
  }

  const setMachine2Handler = () => {
    setMachine2("Trebuchet");
  }

  const setMachine3Handler = () => {
    setMachine3("Flammekaster");
  }

  const setEntHandler = e => {
    let entName = e.currentTarget.value;
    setEnt(entName);
  }
    
  return(
    <article>
      <h3>Maskintest</h3>
      <input onChange={setEntHandler} type="text" />
      <p>{ent}</p>

      <button onClick={setMachine2And3}>Gjør noe</button>
      <p>Maskin 1: {machine1}</p>
      <p>Maskin 2: {machine2}</p>
      <p>Maskin 3: {machine3}</p>
    </article>
  )
}

export const getVersion = () => {
  return 1;
}
export const getAuthor = () => {
  return "Chrissetass";
}