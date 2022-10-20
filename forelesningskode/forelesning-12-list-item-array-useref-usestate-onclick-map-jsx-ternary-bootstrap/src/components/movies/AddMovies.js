import { useState, useRef } from "react";

const AddMovies = () => {

    const [movieArray, setMovieArray] = useState([]); // useState for når det er behov for å oppdatere nettsiden ved endringer i tilstand til komponent
    const titleElement = useRef(); // useRef for når vi trenger å ivareta informasjon fra bruker underveis

    const addMovie = () => {
        setMovieArray( [ ...movieArray, titleElement.current.value ] );
    }

    const getMovieList = () => {
        return movieArray.map( ( movie, i) => (
            <article className="col" key={`movie-${i}`}>
                <div className="bg-secondary">
                    <h3 className="text-white text-center">{movie}</h3>
                </div>
            </article>
        ) )
    }

    return (
        <section className="mb-5">
            <h3>Legg til en film</h3>
            <div>
                <label className="form-label">Tittel</label>
                <input className="form-control" ref={titleElement} type="text"/>
            </div>
            <button className="btn btn-outline-success mt-3" onClick={addMovie}>Legg til film</button>
            <section className="row g-3 mt-3">
                { movieArray.length > 0 ? getMovieList() : <p>Finnes ingen filmer enda</p> } {/* Bruker ternary operator her for å sjekke om det er noen filmer i arrayet. Hvis ja: vis filmer, hvis nei: hvis tekst om at det ikke er noen filmer. */}
            </section>
        </section>
    )
}

export default AddMovies;