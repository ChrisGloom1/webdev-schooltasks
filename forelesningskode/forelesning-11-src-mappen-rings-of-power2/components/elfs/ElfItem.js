import "./ElfItem.css";

const ElfItem = ({name, description}) => { // destructuring
    return(
        <article className="elf-box"> {/* I JSX heter det className og ikke class */}
            <h3>Navn: {name}</h3>
            <p>Beskrivelse: {description}</p> {/* Dette er en JSX-kommentar */}
        </article>
    )
}

export default ElfItem;