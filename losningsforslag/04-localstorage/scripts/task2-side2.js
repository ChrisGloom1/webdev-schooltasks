/*
	HTML objects
*/		
const myStyling = document.getElementById("my-styling");
const statusP = document.getElementById("status-p");

/*
	FUNCTIONS
*/
const setStyling = () => {
	const stylingObject = JSON.parse( localStorage.getItem("styling") );

	const color = stylingObject.color;
	const backgroundColor = stylingObject.backgroundColor;

	myStyling.innerHTML = `
		*{
			color: ${ color };
			background-color: ${ backgroundColor }; 
		}
	`;
}

/*
	INIT FUNCTIONS
*/
(
	init = () => {
		if( localStorage.length > 0 ){
			setStyling();					
		}else{
			statusP.innerHTML = "No styling set yet.";
		}
	}
)()

/*
	EVENTS
*/
