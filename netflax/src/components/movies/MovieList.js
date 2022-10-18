import MovieModule from "../modules/MovieModule";

const MovieList = () => {

  const getMovieList = () => {

    const movieArr = MovieModule.getAll()

    const movies = movieArr.map( (movie, i) => (
      <li key={`m-${i}`}>{movie}</li>
    ) );
    return movies;
  }

  return(
    <section>
      <h3>Filmer 2022</h3>
      <ul>{getMovieList()}</ul>
    </section>
  )
}

export default MovieList;