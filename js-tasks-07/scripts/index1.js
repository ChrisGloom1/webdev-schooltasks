// import Module from "./module/Module";

const inputMovieId = document.querySelector( "#movie-id" );
const inputMovieTitle = document.querySelector( "#movie-title" );
const inputCategoryId = document.querySelector( "#category-id" );
const btnSaveBtn = document.querySelector( "#save-btn" );

const movieId = inputMovieId.value;
const movieTitle = inputMovieTitle.value;
const categoryId = inputCategoryId.value;

let movieArr = [];

const storeMovie = () => {
  // sette variabler med verdien av input fields
  const movieId = inputMovieId.value;
  const movieTitle = inputMovieTitle.value;
  const categoryId = inputCategoryId.value;

  // opprette objekt basert på input fields
  const newMovie = {id: movieId, title: movieTitle, category: categoryId};

  // Plassere objektet i arrayet tidligere opprettet
  movieArr.push(newMovie)

  // Konvertere arrayet til en string
  const stringedArr = JSON.stringify(movieArr);

  // Lagre arrayet som string (stringedArr) i localstorage samt navn på arrayet("Movie Arr") i localstorage
  localStorage.setItem("Movie Arr", stringedArr);
}

btnSaveBtn.addEventListener( "click", storeMovie )