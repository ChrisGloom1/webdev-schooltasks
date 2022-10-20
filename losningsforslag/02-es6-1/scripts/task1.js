/*
    HTML objects
*/
const showRandoNumberBtn = document.querySelector("#show-random-number-btn");
const showRandoNumber2Btn = document.querySelector("#show-random-number2-btn");
const outputP = document.querySelector("#output-p");
const output2P = document.querySelector("#output2-p");

/*
    Variables
*/		

/*
    Functions
*/		
function getARandomNumber(){
    outputP.innerHTML = `Fra vanlig funksjon: ${ Math.random() }`;
}	

const getARandomNumber2 = () => {
    output2P.innerHTML = `Fra arrow-funksjon: ${ Math.random() }`;
};


/*
    Events
*/
showRandoNumberBtn.addEventListener("click", getARandomNumber);
showRandoNumber2Btn.addEventListener("click", getARandomNumber2);