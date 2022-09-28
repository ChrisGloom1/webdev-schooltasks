import Module from "./module/Module.js";

const inputMovieTitle = document.querySelector( "#movie-title" );
const inputCategoryId = document.querySelector( "#category-id" );
const btnSaveBtn = document.querySelector( "#save-btn" );

const storeMovie = () => {
  // sette variabler med verdien av input fields
  const movieTitle = inputMovieTitle.value;
  const categoryId = inputCategoryId.value;
  //Sende verdiene i input fields til modulen der all magien skjer
  Module.storeMovie(movieTitle, categoryId);
}

btnSaveBtn.addEventListener( "click", storeMovie )