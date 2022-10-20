/*
    HTML objects
*/
const showCountriesBtn = document.querySelector("#show-countries-btn");
const countriesUl = document.querySelector("#countries-ul");

/*
    Variables
*/		
const countriesArray = [
    "Norge",
    "Sverige", 
    "Danmark",
    "Finland",
    "Tyskland",
    "England",
    "Frankrike",
    "Spania",
    "Polen",
    "Sveits"
];

/*
    Functions
*/
const showCountries = () => {
    let htmlTxt = "";
    countriesArray.forEach( country => {
        htmlTxt += `<li>${ country }</li>`;
    } );
    countriesUl.innerHTML = htmlTxt;
}


/*
    Events
*/
showCountriesBtn.onclick = showCountries;	
