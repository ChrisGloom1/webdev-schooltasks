const SeriesItem = ({title, category}) => { // SeriesItem tar imot 2 prop (properties): title og category
    return (
        <article className="col-12 col-sm-6 col-md-4"> {/* Knytter opp til Bootstrap col-klasser */}
            <h3>{title}</h3>
            <p>Kategori: {category}</p>
            <button className="btn btn-primary">Stream nå</button>
        </article>
    )
}

export default SeriesItem;