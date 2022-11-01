const printArea = document.querySelector("#print-area");
let htmlTxt = "";
const url = "https://localhost:7073/characters"

const getCharacters = async () => {
  const results = await axios.get(url);
  const characters = results.data;

  characters.forEach(character => {
    htmlTxt += `
      <article class="col">
        <div class="card" style="width: 17rem;">
          <img class="card-img-top" src="images/${character.image}"/>
          <div class="card-body">
            <h5 class="card-title">Name: ${character.name}</h5>
            <p class="card-text">The race of ${character.name} is ${character.race}.</p>
          </div>
        </div>
      </article>
  `;
  });
  printArea.innerHTML = `
  <div class="row">
    ${htmlTxt}
  </div>
  `;
}

getCharacters();