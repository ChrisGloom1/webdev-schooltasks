import React, { useState } from 'react';

const Counter = () => {

    const [ sum, setSum ] = useState(0);
    const [ counter, setCounter ] = useState(0);

    return (
        <section>
            <h3>Task 1: A counter</h3>
            <button onClick={ () => { setSum( sum - 200 ); setCounter( counter + 1 ); }}>-</button>
            <span>{ sum }</span>
            <button onClick={ () => { setSum( sum + 200 ); setCounter( counter + 1) } }>+</button>
            <p>Number of times clicked: { counter }</p>
        </section>        
    )
}

export default Counter;