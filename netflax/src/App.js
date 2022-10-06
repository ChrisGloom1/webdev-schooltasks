import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movies/MovieList";
import SeriesList from "./components/series/SeriesList";

function App() {
  return (
    <div className="container">
      <h1 className="display-2">Netflax</h1>
      <SeriesList/>
      <MovieList/>
    </div>
  );
}

export default App;
