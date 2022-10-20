import MovieModule from "./modules/MovieModule.js";

const movieCategorySelect = document.querySelector("#movie-category-select");
const showMoviesByCategoryBtn = document.querySelector("#show-movies-by-category-btn");
const movieOutput = document.querySelector("#movie-output");

const showAllMovies = (movieArray) => {
    let movies = movieArray;

    if( movies.length > 0){

        let htmlTxt = "";

        movies.forEach(movie => {
            htmlTxt += `
                <article>
                    <h3>${movie.title} (id: ${movie.id})</h3>
                    <p>Kategori: ${movie.category}</p>
                </article>
            `;
        });

        movieOutput.innerHTML = htmlTxt;

    }else{
        movieOutput.innerHTML = "<p>Ingen filmer er lagt til enda!</p>";
    }
}

const showMoviesByCategory = () => {
    const category = movieCategorySelect.value;
    const moviesByCategory = MovieModule.getByCategory(category);
    showAllMovies( moviesByCategory );
}

/*
    Navngir denne funksjonen "INIT" for å markere at dette er en selvkallende funksjon som skal kjøres når siden initieres.
    Når siden initieres skal alle filmer vises.
*/
const INIT = (
    () => {
        const allMovies = MovieModule.getAll();
        showAllMovies( allMovies );
    }
)();

showMoviesByCategoryBtn.addEventListener("click", showMoviesByCategory);