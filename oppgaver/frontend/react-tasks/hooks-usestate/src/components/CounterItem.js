import {useState} from 'react';

const CounterItem = () => {

  const [ sum, setSum ] = useState(0);
  const [ clicks, setClicks ] = useState(0);

  return (
    <section>
      <h3>Task 1: A counter</h3>
      <button onClick={ () => { setSum( sum - 200); setClicks(clicks + 1); }}>-</button>
      <span>{sum}</span>
      <button onClick={ () => { setSum(sum + 200); setClicks(clicks + 1) }}>+</button>
      <p>Number of times clicked: {clicks}</p>
    </section>
  )
}

export default CounterItem;