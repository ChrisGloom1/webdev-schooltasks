const MovieModule = (
  () => {

    const movieArr = [
      "Avatar 2",
      "Albert Åberg",
      "Spiderman - Many Ways Home",
      "Smile",
      "Nope",
      "Olsenbanden"
    ];

    const getAll = () => movieArr;

    return{
      getAll
    }
  }
)();

export default MovieModule;