/*
    HTML objects
*/
const showCountriesBtn = document.querySelector("#show-countries-btn");
const countriesSection = document.querySelector("#countries-section");

/*
    Variables
*/		
const countriesArray = [
    { country_name: "Norge", capital: "Oslo", flag: "norway.png" },
    { country_name: "Danmark", capital: "København", flag: "denmark.png" },
    { country_name: "Sverige", capital: "Stockholm", flag: "sweden.png" }
];

/*
    Functions
*/
const showCountries = () => {
    let htmlTxt = "";
    countriesArray.forEach( country => {
        htmlTxt += `
            <article>
                <h3>${ country.country_name }</h3>
                <h4>Hovedstad: ${ country.capital }</h4>
                <img style="width: 100px;" src="images/${ country.flag }" alt="Illustrasjon. Flaggbilde.">
            </article>`;
    } );
    countriesSection.innerHTML = htmlTxt;
}


/*
    Events
*/
showCountriesBtn.onclick = showCountries;