import "bootstrap/dist/css/bootstrap.min.css"
import MovieList from "./components/movies/MovieList";
import SeriesList from "./components/series/SeriesList";
import AddMovies from "./components/movies/AddMovies";

function App() {
  return (
    <div className="container">
      <h1 className="display-2">Netflax</h1>
      <AddMovies/>
      <SeriesList/>
      <MovieList/>
    </div>
  );
}

export default App;
