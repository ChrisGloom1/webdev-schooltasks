import './App.css';
import PokemonList from './components/pokemons/PokemonList';

/*
  Interface (med datatyper)
  - Representerer en type pokemon
  - 1 Interface = 1 entitet i DB

  Module
  - Datalager
  - Funksjoner

  List-komponent
  Item-komponent
*/

function App() {
  return (
    <div>
      <PokemonList/>
    </div>
  );
}

export default App;
