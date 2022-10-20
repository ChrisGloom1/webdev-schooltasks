import MovieModule from "./modules/MovieModule.js";

const idTxt = document.querySelector("#id-txt");
const getMovieBtn = document.querySelector("#get-movie-btn");
const deleteMovieBtn = document.querySelector("#delete-movie-btn");
const movieOutput = document.querySelector("#movie-output");

const getMovie = () => {
    const id = idTxt.value;
    const movie = MovieModule.getById(id);

    movieOutput.innerHTML = `
        <article>
            <h3>${movie.title} (id: ${movie.id})</h3>
            <p>Kategori: ${movie.category}</p>
        </article>
    `;
}

const deleteMovie = () => {
    const id = idTxt.value;
    MovieModule.deleteMovie(id);
}

getMovieBtn.addEventListener("click", getMovie);
deleteMovieBtn.addEventListener("click", deleteMovie);