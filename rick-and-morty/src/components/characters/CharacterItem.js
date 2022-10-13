const CharacterItem = ({name, status, image}) => {
  return(
    <article>
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <img src={image} alt="img of character"/>
    </article>
  )
}

export default CharacterItem;