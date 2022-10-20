import './App.css'
import AddSubItem from './components/AddSubItem';
import CounterItem from "./components/CounterItem";
import SuperheroItem from './components/SuperheroItem';
import WordInStateItem from './components/WordInStateItem';
import MovieItem from './components/MovieItem'

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
    </div>
</div>
  );
}

export default App;
