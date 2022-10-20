import React, { useState } from 'react';

const Counter2 = () => {

    const [ counter, setCounter ] = useState(0);
    const [ valueFromUser, setValueFromUser ] = useState(0);

    const handleChange = (e) => {
        setValueFromUser(e.target.value);
    }

    const addToCounter = () => {
        setCounter( counter + parseInt(valueFromUser) );
    }

    const removeFromCounter = () => {
        setCounter( counter - parseInt(valueFromUser))
    }

    return (
        <section>
            <h3>Task 3: Let user decide number to add</h3>
            <input onChange={ handleChange } type="number"/>
            <button onClick={ addToCounter }>Add number</button>
            <button onClick={ removeFromCounter }>Subtract number</button>
            <p>The sum: { counter }</p>
            
        </section>        
    )
}

export default Counter2;