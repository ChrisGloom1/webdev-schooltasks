const countries = [
  {
    countryName: "Norway",
    capital: "Oslo",
    image: "norway.gif"
  },
  {
    countryName: "Sweden",
    capital: "Stockholm",
    image: "sweden.gif"
  },
  {
    countryName: "Denmark",
    capital: "Copenhagen",
    image: "denmark.gif"
  }
];

const countriesBtn = document.querySelector( "#countries-btn" );
const countriesOutput = document.querySelector( "#countries-output" );

const showAllCountries = () => {
  let htmlContent = "";
  countries.forEach ( ( countries ) =>
  {
    htmlContent += `
      <h2>${ countries.countryName }</h2>
      <h3>Capital: ${ countries.capital }</h3>
      <img src="images/${ countries.image }" />
    `;
  } );
  countriesOutput.innerHTML += htmlContent;
}


countriesBtn.addEventListener( "click", showAllCountries );