import "./ElfItem.css"

const ElfItem = ({name, description}) => { // destructuring
  return(
    <article>
      <h3 className="elf-heading">{name}</h3>
      <p>{description}</p>
    </article>
  )
}
export default ElfItem;