import { useState } from "react";

const ObjInStateItem = () => {

  const [movie, setMovie] = useState({title: "Not set", category: "Not set"})

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setMovie({...movie, [name]: value})
  }

  return(
    <section>
      <h3>Task 6: Movie obj v2</h3>
      <span>Title:</span>
      <input type="text" name="title" onChange={changeHandler}/>
      <span>Category:</span>
      <input type="text" name="category"onChange={changeHandler}/>
      <article>
        <h3>Title: {movie.title}</h3>
        <p>Category: {movie.category}</p>
      </article>
    </section>
  )
}

export default ObjInStateItem;