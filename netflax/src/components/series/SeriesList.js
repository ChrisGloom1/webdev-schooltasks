import SeriesItem from "./SeriesItem"

const SeriesList = () => {

  const seriesArr = [
    {
      title: "Rings of Power",
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
  ]

  const getSeriesList = () => {
    const series = seriesArr.map( (_series, i) => (
      <SeriesItem 
        key={`series-${i}`}
        title={_series.title}
        category={_series.category}
        />
    ) );
      return series;
  }

  return (
    <section>
      <h3>Serier 2022</h3>
      <section className="row">{getSeriesList()}</section>
    </section>
  )
}

export default SeriesList;