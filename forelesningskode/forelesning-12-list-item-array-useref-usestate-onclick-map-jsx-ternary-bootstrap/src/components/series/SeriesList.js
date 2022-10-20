import SeriesItem from "./SeriesItem";

const SeriesList = () => {

    const seriesArray = [ // array med objekter
        {
            title: "Rings of power",
            category: "Fantasy"
        },
        {
            title: "House of the Dragon",
            category: "Fantasy"
        },
        {
            title: "Andor",
            category: "Scifi"
        },
        {
            title: "The Boys",
            category: "Superhero"
        }
    ];

    const getSeriesList = () => {
        const series = seriesArray.map( (_series, i) => ( /* Legger til underscore på series i map for å skille dem fra hverandre; problematikken med at noen ord er de samme i entall og flertall. */
            <SeriesItem 
                key={`series-${i}`} 
                title={_series.title}
                category={_series.category} />
        ) );
        return series;
    }

    return (
        <section>
            <h3 className="display-4">Serier 2022</h3>
            <section className="row g-5">{getSeriesList()}</section> {/* Bruker Bootstrap row på seksjonen som kommer rundt <SeriesItem>-komponentene som er cols */}
        </section>
    )
}

export default SeriesList;