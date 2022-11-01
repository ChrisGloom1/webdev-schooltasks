const outputDiv = document.querySelector("#output-div");
const btnGetAll = document.querySelector("#btn-get-all");
let htmlTxt = "";

const endpoints = {
  characters: "https://localhost:7073/characters/",
  id: "https://localhost:7073/characters/id/",
  name: "https://localhost:7073/characters/name/",
  race: "https://localhost:7073/characters/race/"
};

const getCharacters = async () => {
  const res = await axios.get(endpoints.characters);
  const characters = res.data;

  characters.forEach(character => {
    htmlTxt += `
      <article class="col">
        <div class="card" style="width: 17rem;">
          <img class="card-img-top" src="https://localhost:7073/images/${character.image}"/>
          <div class="card-body">
            <h5 class="card-title">Name: ${character.name}</h5>
            <p class="card-text">The race of ${character.name} is ${character.race}.</p>
          </div>
        </div>
      </article>
  `;
  });
  outputDiv.innerHTML = "";
  outputDiv.innerHTML = `
  <div class="row">
    ${htmlTxt}
  </div>
  `;
}

btnGetAll.addEventListener("click", getCharacters)