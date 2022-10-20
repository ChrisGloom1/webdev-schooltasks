import { useState } from "react";

const MovieItem = () => {

  const [movie, setMovie] = useState("Movie: not set. Category: not set.");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  
  const changeHandler = (e) => {
    switch(e.target.id){
      case "titleInput":
        setTitle(e.target.value);
        break;
      case "categoryInput":
        setCategory(e.target.value);
      default:
    }
  }

  const setMovieObject = () => {
    setMovie( { title: title, category: category } )
  }

  return(
    <section>
      <h3>Task 5: A movie object v1</h3>
      <span>Title: </span>
      <input onChange={changeHandler} type="text" id="titleInput"/>
      <span> Category: </span>
      <input onChange={changeHandler} type="text" id="categoryInput"/>
      <button onClick={setMovieObject}>Set movie</button>
      <article>
        <h3>Title: {movie.title}</h3>
        <p>Category: {movie.category}</p>
      </article>
    </section>
  )
}

export default MovieItem;