const MovieList = () => {

  const movieArr = [
    "Avatar 2",
    "Albert Åberg",
    "Spiderman - Many Ways Home",
    "Smile",
    "Nope",
    "Olsenbanden"
  ];

  const getMovieList = () => {
    const movies = movieArr.map( (movie, i) => (
      <li key="{`m-${i}`}">{movie}</li>
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