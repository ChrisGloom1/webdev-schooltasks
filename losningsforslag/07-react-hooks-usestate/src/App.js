import React from 'react';
import Counter from './components/Counter';
import Word from './components/Word';
import Counter2 from './components/Counter2';
import Superheroes from './components/Superheroes';
import Movie from './components/Movie';
import Movie2 from './components/Movie2';
import Countries from './components/Countries';

import './App.css';

function App() {
  return (
    <div>

      <h1>Using React Hooks</h1>

      <div className="wrapper">
        <Counter></Counter>
        <Word></Word>
        <Counter2></Counter2>
        <Superheroes></Superheroes>
        <Movie></Movie>
        <Movie2></Movie2>
        <Countries></Countries>
      </div>

    </div>
  );
}

export default App;