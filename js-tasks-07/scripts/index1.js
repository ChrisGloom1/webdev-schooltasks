import Module from "./module/Module.js";

const inputMovieId = document.querySelector( "#movie-id" );
const inputMovieTitle = document.querySelector( "#movie-title" );
const inputCategoryId = document.querySelector( "#category-id" );
const btnSaveBtn = document.querySelector( "#save-btn" );



const storeMovie = () => {
  // sette variabler med verdien av input fields
  const movieId = inputMovieId.value;
  const movieTitle = inputMovieTitle.value;
  const categoryId = inputCategoryId.value;
  //Sende verdiene i input fields til modulen der all magien skjer
  Module.storeMovie(movieId, movieTitle, categoryId);
}

btnSaveBtn.addEventListener( "click", storeMovie )