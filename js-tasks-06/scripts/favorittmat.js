const inpFoodName = document.querySelector( "#inp-food-name" );
const inpFood = document.querySelector( "#inp-food" );
const btnFoodStoreInformation = document.querySelector( "#btn-food-store-information" );
const btnFoodDeleteInformation = document.querySelector( "#btn-food-delete-information" );
const outputFoodAndDrink = document.querySelector( "#output-food-and-drink" );

const addFavoriteFood = () => {
  let htmlTxt = "";
  const name = inpFoodName.value;
  const food = inpFood.value;
if(name == "" || food == ""){
  htmlTxt = "Please enter values in both name and food";
  outputFoodAndDrink.innerHTML = `
  <h4 style="color: red">${htmlTxt}</h4>
  `;
} else {
  htmlTxt = `
  <h4 style="color: green">
    Your name (${name}) and favorite food (${food}) is stored.
  </h4>
  `;
  localStorage.setItem(name, food);
  outputFoodAndDrink.innerHTML = htmlTxt;
  }
};

const removeFavoriteFood = () => {
  const name = inpFoodName.value;
  localStorage.removeItem(name);
};

const getAnEntryEntryInLocalStorage = () => {
  const lastUser = localStorage.key(0);
  const lastFood = localStorage.getItem(localStorage.key(0));
  console.log(lastUser);
  outputFoodAndDrink.innerHTML = `
  <h4>
    Welcome back, ${lastUser}! <br> Your fave dishhh is ${lastFood}. <br> Do you wanna order this again?
  </h4>
  `;
};

getAnEntryEntryInLocalStorage();
btnFoodStoreInformation.addEventListener( "click", addFavoriteFood );
btnFoodDeleteInformation.addEventListener( "click", removeFavoriteFood );