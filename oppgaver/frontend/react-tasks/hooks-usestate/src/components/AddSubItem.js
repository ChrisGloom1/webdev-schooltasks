import { useState } from "react";

const AddSubItem = () => {
  
  const [number, setNumber] = useState(0);
  const [valueFromUser, setValueFromUser] = useState(0)

  const changeHandler = (e) => {
    setValueFromUser(e.target.value)
  }

  const addition = () => {
    setNumber (number + parseInt(valueFromUser));
  }

  const subtraction = () => {
    setNumber (number - parseInt(valueFromUser))
  }


  return(
    <section>
      <h3>Task 3: Let user decide number to add or sub</h3>
      <input onChange={ changeHandler } type="number" />
      <button onClick={addition}>Add number</button>
      <button onClick={subtraction}>Subtract number</button>
      <p>The number: {number}</p>
    </section>
  )
}

export default AddSubItem;