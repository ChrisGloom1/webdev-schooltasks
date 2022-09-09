const showCountriesBtn = document.querySelector( "#show-countries-btn" );
const showCountriesOutput = document.querySelector( "#show-countries-output" );

const arrayCountries = [
  "Norge",
  "Sverige",
  "Danmark",
  "Finland",
  "Tyskland",
  "England",
  "Frankrike"
];

const showCountries = () => 
{
  let htmlUl = "<ul>";
  let htmlUlStop = "</ul>";
  let htmlContent = "";
  arrayCountries.forEach( ( countries ) =>
  {
    htmlContent += `
    <li>${ countries }</li>`;
  } );
  showCountriesOutput.innerHTML = htmlUl += htmlContent += htmlUlStop;
}

showCountriesBtn.addEventListener( "click", showCountries );