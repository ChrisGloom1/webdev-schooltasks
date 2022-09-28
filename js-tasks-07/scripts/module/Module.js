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

  return {
    storeMovie
  }

})();
export default Module;