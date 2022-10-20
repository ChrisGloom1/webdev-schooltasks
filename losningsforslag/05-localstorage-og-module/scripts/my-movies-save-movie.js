import MovieModule from './modules/MovieModule.js';

const titleTxt = document.querySelector("#title-txt"); 
const categorySelect = document.querySelector("#category-select"); 
const saveMovieBtn = document.querySelector("#save-movie-btn"); 

const saveMovie = () => { // NB! Har ikke inkludert sjekk av om brukeren har tastet inn noe for å holde koden minst mulig.
    const title = titleTxt.value;
    const category = categorySelect.value;

    const newMovie = { title: title, category: category }; // { propName: value }

    MovieModule.saveMovie( newMovie ); // sender ny film til modulen
}

saveMovieBtn.addEventListener("click", saveMovie);