import SuperheroModule from "./SuperheroModule.js";

const superheroesOutput = document.querySelector("#superheroes-output");

const showSuperheroes = ( array ) => {
  let htmlTxt = "";
  array.forEach(superhero => { // Ternary operator (TRUE:FALSE)
    htmlTxt += `
      <article>
        <h3 class="${ superhero.good ? "superhero__title--good" : "superhero__title--evil" }">${ superhero.name }</h3>
        <img src="images/${ superhero.image }" />
      </article>
    `;
  });
  superheroesOutput.innerHTML = htmlTxt;
}


showSuperheroes( SuperheroModule.getAll() );
