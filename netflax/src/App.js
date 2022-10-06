import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movies/MovieList";

function App() {
  return (
    <div className="container">
      <h1 className="display-2">Netflax</h1>
      <MovieList/>
    </div>
  );
}

export default App;
