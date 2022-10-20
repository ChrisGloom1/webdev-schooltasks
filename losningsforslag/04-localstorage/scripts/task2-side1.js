/*
	HTML objects
*/
const colorTxt = document.getElementById("color-txt");
const bgColorTxt = document.getElementById("bg-color-txt");
const saveStylingBtn = document.getElementById("save-styling-btn");
const deleteStylingBtn = document.getElementById("delete-styling-btn");
const outputSection = document.getElementById("output-section");

/*
	FUNCTIONS
*/
const saveStyling = () => {
	const color = colorTxt.value;
	const bgColor = bgColorTxt.value;

	const stylingObject = { color: color, backgroundColor: bgColor };

	localStorage.setItem("styling", JSON.stringify(stylingObject) );

	checkLocalStorage();
}

const deleteStyling = () => {
	localStorage.clear();
	checkLocalStorage();
}

const checkLocalStorage = () => {
	if( localStorage.length > 0 ){
		const stylingObject = JSON.parse(localStorage.getItem("styling"));				
		outputSection.innerHTML = `Styling er lagret. color: ${ stylingObject.color }, bgcolor: ${ stylingObject.backgroundColor }`;				
	}else{
		outputSection.innerHTML = "Ingen stil er satt.";
	}
}


/*
	EVENTS
*/
saveStylingBtn.addEventListener("click", saveStyling);
deleteStylingBtn.addEventListener("click", deleteStyling);


/*
	INIT FUNCTIONS
*/
(
	init = () => {
		checkLocalStorage();
	}
)()