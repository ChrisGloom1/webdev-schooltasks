import './App.css'
import AddSubItem from './components/AddSubItem';
import CounterItem from "./components/CounterItem";
import SuperheroItem from './components/SuperheroItem';
import WordInStateItem from './components/WordInStateItem';
import MovieItem from './components/MovieItem'
import ObjInStateItem from './components/ObjInStateItem';
import AddCountriesItem from './components/AddCountriesItem';

function App() {
  return (
<div>
  <h1>React Hooks and useState</h1>
    <div className="container">
    <CounterItem/>
    <WordInStateItem />
    <AddSubItem />
    <SuperheroItem />
    <MovieItem />
    <ObjInStateItem />
    <AddCountriesItem />
    </div>
</div>
  );
}

export default App;
