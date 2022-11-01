const CharacterItem = ({name, species, gender, image}) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <img src={image} alt="{name}"/>
    </article>
  )
}

export default CharacterItem;