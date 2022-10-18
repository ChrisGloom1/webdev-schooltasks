const SeriesItem = ({title, category}) => {
  return(
    <article className="col-12 col-sm-6 col-md-4 mb-4">
      <h3>{title}</h3>
      <p>Kategori: {category}</p>
      <button className="btn btn-primary">Stream nå!</button>
    </article>
  )
}

export default SeriesItem;