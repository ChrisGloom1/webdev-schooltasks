import React, { useState } from 'react';

const Word = () => {

    const [ word, setWord ] = useState("");

    const handleChange = (e) => {
        setWord( e.target.value );
    }

    return (
        <section>
            <h3>Task 2: A word in state</h3>
            <label>Word</label>
            <input onChange={ handleChange } type="text"/>
            <p>The word in the state: { word }</p>
        </section>        
    )
}

export default Word;