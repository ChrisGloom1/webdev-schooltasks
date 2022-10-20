import React, { useState } from 'react';

const Movie2 = () => {

    const [ movie, setMovie ] = useState( { title: "Not set", category: "Not set"} );

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    }

    return (
        <section>
            <h3>Task 6: A movie object, version 2</h3>
            <label>Title</label>
            <input name="title" onChange={ handleChange } type="text"/>
            <label>Category</label>
            <input name="category" onChange={ handleChange } type="text"/>
                   
            <article>
                <h3>Title: { movie.title }</h3>
                <p>Category: { movie.category }</p>
            </article>
        </section>        
    )
}

export default Movie2;