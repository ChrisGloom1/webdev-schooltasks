const Module = ( ()=> {

  let movieArr = [];
  let movieId = 1;

  const storeMovie = (movieTitle, categoryId) => {
    // opprette objekt basert på input fields
    const newMovie = {id: movieId, title: movieTitle, category: categoryId};
    // Plassere objektet i arrayet tidligere opprettet
    movieArr.push(newMovie)
    // Konvertere arrayet til en string
    const stringedArr = JSON.stringify(movieArr);
    // Lagre arrayet som string (stringedArr) i localstorage samt navn på arrayet("Movie Arr") i localstorage
    localStorage.setItem("Movie Arr", stringedArr);
    movieId++;
  }

  const getAllMovies = () => {
    if ( movieArr.length > 0 ){
      htmlTxt = "";
      movieArr.forEach(movie => {
        htmlTxt = `
          <article>
            <h3>${movie.title}</h3>
            <ul>
              <li>${movie.categoryId}</li>
              <li>${movie.movieId}</li>
            <ul>
          </article>
        `;
      } );
    } else {
      htmlTxt = "Ingen filmer lagret.";
    }
    // TODO: fix output to be correct
  }

  return {
    storeMovie, getAllMovies
  }

})();
export default Module;