import MovieModule from "../../modules/MovieModule";

const MovieList = () => {

    const getMovieList = () => {

        const movieArray = MovieModule.getAll(); // Får tilbake alle filmer fra MovieModule ved å kalle på getAll-funksjonen i MovieModule
        
        const movies = movieArray.map( (movie, i) => ( // i er en teller som inkrementerer for hver film map finner i arrayet
            <li key={`m-${i}`}>{movie}</li> // Må huske å legge til key på hovedelementet i en map
        ) );

        return movies;

    }

    return (
        <section className="mt-5">{ /* Hei, jeg er en JSX-kommentar */ }
            <h3 className="display-4">Filmer 2022</h3>
            <ul>{getMovieList()}</ul> { /* Funksjonen getMovieList blir kalt på her. Den returnerer x antall <li> med filmnavn hentet fra MovieModule*/ }
        </section>
    )
}

export default MovieList;