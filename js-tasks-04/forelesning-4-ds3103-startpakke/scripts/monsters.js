// alert("Koblet til")

const cuteMonsters = [
  {
    name: "Dracula",
    age: 30,
    image: "cute-dracula.png",
    living: false
  },
  {
    name: "Frankenstein",
    age: 120,
    image: "cute-frankenstein.png",
    living: true
  },
  {
    name: "Ghost Viking",
    age: 1000,
    image: "cute-ghost.png",
    living: false
  },
];

let showAllMonstersBtn = document.querySelector( "#show-all-monsters-btn" );


const showAllMonsters = () =>
{
  let htmlText = "";
  cuteMonsters.forEach( ( monster ) =>
  {
    htmlText += `
    <article class="col-4 col-sm-3">
      <h3>${ monster.name }</h3>
      <img src="images/${ monster.image }" alt="Image of ${ monster.name }">
    </article>`;
  } );
  document.querySelector( "#monster-section" ).innerHTML = htmlText;
}
showAllMonstersBtn.addEventListener("click", showAllMonsters);