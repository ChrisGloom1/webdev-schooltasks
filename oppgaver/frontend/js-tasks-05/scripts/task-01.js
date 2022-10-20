// Variables reffering to id's in the html
const visAlleBtn = document.querySelector( "#vis-alle-btn" );
const merkeInput = document.querySelector( "#merke-input" );
const etterMerkeBtn = document.querySelector( "#etter-merke-btn" );
const minPrisInput = document.querySelector( "#min-pris-input" );
const maksPrisInput = document.querySelector( "#maks-pris-input" );
const etterPrisBtn = document.querySelector( "#etter-pris-btn" )
const sorterKmBtn = document.querySelector( "#sorter-km-btn" );
const sorterPrisBtn = document.querySelector( "#sorter-pris-btn" )
const bilerOutput = document.querySelector ( "#biler-output" );

// status på sistbrukte filter (endres når funksjon blir kjørt)
let filter = null;
let reversed = false;

const bilerArray = [
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2019,
    kilometers: 41900,
    effectsHP: 224,
    image: "tesla_3.jpg",
    priceNOK: 380670
  },
  {
    brand: "Tesla",
    model: "Roadster",
    year: 2010,
    kilometers: 95000,
    effectsHP: 270,
    image: "tesla_roadster.jpg",
    priceNOK: 1200000
  },
  {
    brand: "Lamborghini",
    model: "Huracan",
    year: 2020,
    kilometers: 23000,
    effectsHP: 650,
    image: "lamborghini_huracan.jpg",
    priceNOK: 3690000
  },
  {
    brand: "Ferrari",
    model: "488",
    year: 2016,
    kilometers: 56000,
    effectsHP: 840,
    image: "ferrari_488.jpg",
    priceNOK: 2790000
  },
  {
    brand: "Porche",
    model: "Taycan",
    year: 2021,
    kilometers: 13850,
    effectsHP: 761,
    image: "porche_taycan.jpg",
    priceNOK: 1795000
  },
  {
    brand: "BMW",
    model: "i3",
    year: 2019,
    kilometers: 58000,
    effectsHP: 170,
    image: "bmw_i3.jpg",
    priceNOK: 279000
  },
  {
    brand: "Nissan",
    model: "Leaf",
    year: 2016,
    kilometers: 80000,
    effectsHP: 109,
    image: "nissan_leaf.jpg",
    priceNOK: 119900
  },
  {
    brand: "Toyota",
    model: "Auris",
    year: 2014,
    kilometers: 50000,
    effectsHP: 99,
    image: "toyota_auris.jpg",
    priceNOK: 169900
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    year: 1999,
    kilometers: 277739,
    effectsHP: 150,
    image: "vw_golf.jpg",
    priceNOK: 39900
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    year: 2010,
    kilometers: 159000,
    effectsHP: 405,
    image: "chevrolet_camaro.jpg",
    priceNOK: 350000
  }
]

// Functions
const showAllCars = () => {
  filter = showAllCars;
  displayCars(bilerArray);
}

const showCarsByBrand = () => {
  filter = showCarsByBrand;
  let brand = merkeInput.value;
  let carsByBrand = bilerArray.filter(cars => 
    cars.brand === brand
    )
    displayCars(carsByBrand);
}

const showCarsByPriceRange = () => {
  filter = showCarsByPriceRange;
  const minPrice = minPrisInput.value;
  const maxPrice = maksPrisInput.value;
  let carsByPriceRange = bilerArray.filter(cars => 
    cars.priceNOK >= minPrice && cars.priceNOK <= maxPrice
  )
  displayCars(carsByPriceRange);
}

const displayCars = carArray => {
  let htmlTxt = "";
  carArray.forEach(cars => {
    htmlTxt += `
    <article>
      <img src="images/${cars.image}" />
      <h3>${cars.brand} ${cars.model}, ${cars.year}</h3>
      <p>Pris: ${cars.priceNOK},- NOK</p>
      <p>Kilometer: ${cars.kilometers}</p>
      <p>Hestekrefter: ${cars.effectsHP}</p>
    </article>
    `;  
  });
  bilerOutput.innerHTML = "";
  bilerOutput.innerHTML = htmlTxt;
}

const showCarsBySortedKm = () => {
  bilerArray.sort(( car1, car2 ) => car1.kilometers > car2.kilometers ? 1 : -1)
  display(filter);
}

const showCarsBySortedPrice = () => {
    bilerArray.sort((car1, car2) => car1.priceNOK > car2.priceNOK ? 1 : -1)
  display(filter);
}

// Tar inn et filter som parameter og kjører det filteret
const display = filter => {
  if (filter != null){
    filter();
  }
}

// EventListeners
visAlleBtn.addEventListener( "click", showAllCars )
etterMerkeBtn.addEventListener( "click", showCarsByBrand )
etterPrisBtn.addEventListener( "click", showCarsByPriceRange )
sorterPrisBtn.addEventListener( "click", showCarsBySortedPrice )
sorterKmBtn.addEventListener( "click", showCarsBySortedKm )