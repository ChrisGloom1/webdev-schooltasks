/*
    ***
    Array
    ***
*/
const carArray = [
    { 
        brand: "Nissan",
        model: "Leaf",
        year: 2014,
        kilometers: 79000,
        effectHP: 109,
        image:  "o_1gco4b5gr1vej1imsf9e1aplip22d.JPG",
        priceNOK: 95000
    },
    { 
        brand: "BMW",
        model: "5-serie",
        year: 2017,
        kilometers: 104000,
        effectHP: 218,
        image:  "o_1gco4dc2p1jcv8i2sls1v691sn115.jpg",
        priceNOK: 39000
    },
    { 
        brand: "Nissan",
        model: "Leaf 3",
        year: 2000,
        kilometers: 50000,
        effectHP: 10,
        image:  "o_1gco4dc2p1jcv8i2sls1v691sn115.jpg",
        priceNOK: 50000
    }
];


/*
    ***
    HTML Objects
    ***
*/
const getHTMLObject = (selector) => document.querySelector(selector); // Litt mer komfortabelt å skrive?

const carResults = getHTMLObject("#car-results");
const showAllBtn = getHTMLObject("#show-all-btn");
const searchByBrandBtn = getHTMLObject("#search-by-brand-btn");
const brandTxt = getHTMLObject("#brand-txt");
const searchByPriceBtn = getHTMLObject("#search-by-price-btn");
const minPriceTxt = getHTMLObject("#min-price-txt");
const maxPriceTxt = getHTMLObject("#max-price-txt");
const sortByKilometersBtn = getHTMLObject("#sort-by-kilometers-btn");
const sortByPriceBtn = getHTMLObject("#sort-by-price-btn");


/*
    ***
    Functions
    ***
*/
const showAll = () => showCars(carArray);

const searchByBrand = () => {
    const chosenBrand = brandTxt.value;
    const carsByBrand = carArray.filter( car => car.brand.toLowerCase() === chosenBrand.toLowerCase() );
    showCars( carsByBrand );
}

const searchByPrice = () => {
    const minPrice = parseInt( minPriceTxt.value );
    const maxPrice = parseInt( maxPriceTxt.value );

    const carsFilteredByPrice = carArray.filter( car => car.priceNOK >= minPrice && car.priceNOK <= maxPrice );
    showCars( carsFilteredByPrice );
}

const sortByKilometers = () => {
    const carsSortedByKilometers = carArray.sort( ( car1, car2 ) =>  car1.kilometers > car2.kilometers ? 1 : -1 );
    showCars( carsSortedByKilometers );
}

const getSortedByPrice = () => { // Alternativ måte: fordeler/ulemper med denne måten?
    const carsSortedByPrice = carArray.sort( (car1, car2) => car1.priceNOK > car2.priceNOK ? 1 : -1 ); // ? 1 : -1 kan evt. utelates hvis man ikke ønsker å kunne endre på sorteringen  
    return carsSortedByPrice;
}

const showCars = ( array ) => {    
    let htmlTxt = `<p>Antall biler funnet: ${ array.length }</p>`;

    array.forEach( car => {
        htmlTxt += `
            <article>
                <h3>${car.brand} - ${car.model}</h3>    
                <p>Pris: ${car.priceNOK},-NOK</p>
                <p>Kilometer: ${car.kilometers}</p>
                <img class="responsive-image" src="images/${ car.image }">
            </article>
        `;
    });

    carResults.innerHTML = htmlTxt;
}

/*
    Event setting
*/
showAllBtn.addEventListener("click", showAll);
searchByBrandBtn.addEventListener("click", searchByBrand);
searchByPriceBtn.addEventListener("click", searchByPrice);
sortByKilometersBtn.addEventListener("click", sortByKilometers);

// Alternativ måte (se også funksjonen over): hvilke fordeler og ulemper er det med denne teknikken
sortByPriceBtn.addEventListener("click", () => {
    showCars( getSortedByPrice() );
});