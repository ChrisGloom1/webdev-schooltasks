import { useState } from "react";


const WordInStateItem = () => {

  const [word, setWord] = useState("");

  const wordHandler = (e) => {
    setWord(e.target.value);
  }

  return(
    <section>
      <h3>Task 2: A word in state</h3>
      <span>Word: </span><input onChange={wordHandler} type="text"/>
      <p>The word in state: {word}</p>
    </section>
  )
}

export default WordInStateItem;