import Module from "./module/Module.js";

const btnShowAllMovies = document.querySelector( "#show-all-movies" );
const btnShowMoviesCategory = document.querySelector( "#show-movies-category" );
const outputDivPage2 = document.querySelector( "#output-div-page2" );

const getAllMovies = () => {
  Module.getAllMovies();
  // Fix output to be cirrect
  
}


btnShowAllMovies.addEventListener( "click", Module.getAllMovies )