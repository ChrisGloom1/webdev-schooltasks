import { useState, useRef } from "react"; 

const AddMovie = () => {

  const [movieArr, setMovieArr] = useState([]);
  const titleElement = useRef();

  const addMovie = () => {
    setMovieArr( [ ...movieArr, titleElement.current.value ] )
  }

  const getMovieList = () => {
    return movieArr.map( (movie, i) => (
      <article key={`movie-${i}`}>
        <h3>{movie}</h3>
      </article>
    ) )
  }

  return(
    <section className="mb-3">
      <h3>Legg til en film</h3>
      <div className="mb-2">
        <label>Tittel</label>
        <input 
          type="text"
          ref={titleElement} 
          />
      </div>
      <button 
      className="btn btn-success"
      onClick={addMovie}
      >
        Legg til film
      </button>
      <section>{ movieArr.length > 0 ? getMovieList() : "Finnes ingen filmer enda" }</section>
    </section>
  )
}

export default AddMovie;