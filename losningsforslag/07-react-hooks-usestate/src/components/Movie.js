import React, { useState } from 'react';

const Movie = () => {

    const [ movie, setMovie ] = useState( { title: "Not set", category: "Not set"} );
    const [ title, setTitle ] = useState("");
    const [ category, setCategory ] = useState("");

    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "title":
                setTitle( e.target.value );
                break;
            case "category":
                setCategory( e.target.value );
                break;
            default: 
        }
    }

    const setMovieObject = () => {
        setMovie( { title: title, category: category } );
    }

    return (
        <section>
            <h3>Task 5: A movie object, version 1</h3>
            <label>Title</label>
            <input id="title" onChange={ handleChange } type="text"/>
            <label>Category</label>
            <input id="category" onChange={ handleChange } type="text"/>
            <input onClick={ setMovieObject } type="button" value="Set movie"/>       
            <article>
                <h3>Title: { movie.title }</h3>
                <p>Category: { movie.category }</p>
            </article>
        </section>        
    )
}

export default Movie;