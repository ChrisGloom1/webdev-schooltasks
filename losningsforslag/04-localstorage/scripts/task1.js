/*
	HTML objects
*/
const nameTxt = document.getElementById("name-txt");
const favoriteFoodTxt = document.getElementById("favorite-food-txt");
const saveInformationBtn = document.getElementById("save-information-btn");
const deleteInformationBtn = document.getElementById("delete-information-btn");
const outputSection = document.getElementById("output-section");


/*
	FUNCTIONS
*/
const saveInformation = () => {
	const name = nameTxt.value;
	const favoriteFood = favoriteFoodTxt.value;

	let message;

	if( name.trim().length > 0 && favoriteFood.trim().length > 0 ){
		localStorage.setItem("name", name);
		localStorage.setItem("favoriteFood", favoriteFood);
		message = `Ditt navn (${ name }) og favorittmat (${ favoriteFood }) er nå lagret.`;
	}else{
		message = "<span style='color: red'>Vennligst fyll ut både navn og favorittmat.</span>"
	}

	outputSection.innerHTML = message;
}

const deleteInformation = () => {
	localStorage.clear();
	checkInfoInLocalStorage();
}


const checkInfoInLocalStorage = () => {

	const numberOfItems = localStorage.length;
	let message = ``;

	if( numberOfItems === 0 ){
		message = `Antall verdier i local storage: ${ numberOfItems }`
	}else{

		let name = localStorage.getItem("name");
		let favoriteFood = localStorage.getItem("favoriteFood");

		message = `Velkommen tilbake ${ name }, din favorittmat er ${ favoriteFood }. Ønsker du å bestille det igjen?`;
	}

	outputSection.innerHTML = message;
}


/*
	INIT functions		
*/
( // immediately triggered arrow function	
	() => checkInfoInLocalStorage()
)();		


/*
	EVENTS
*/
saveInformationBtn.addEventListener("click", saveInformation);
deleteInformationBtn.addEventListener("click", deleteInformation);