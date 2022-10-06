import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movies/MovieList";
import SeriesList from "./components/series/SeriesList";
import AddMovie from "./components/movies/AddMovie";

function App() {
  return (
    <div className="container">
      <h1 className="display-2">Netflax</h1>
      <AddMovie />
      <br></br>
      <MovieList/>
      <br></br>
      <SeriesList/>
      <br></br>
    </div>
  );
}

export default App;
