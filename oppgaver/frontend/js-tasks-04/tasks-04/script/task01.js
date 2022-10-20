const regularFunctionOutput = document.querySelector( "#regular-function-output" );
const arrowFunctionOutput = document.querySelector( "#arrow-function-output" )

const regularFunctionBtn = document.querySelector( "#regular-function-btn" );
const arrowFunctionBtn = document.querySelector( "#arrow-function-btn" );


function getARandomNumberRegular(){
  regularFunctionOutput.innerHTML = `Fra vanlig funksjon: ${ Math.random() }`;
}
const getARandomNumberArrow = () => arrowFunctionOutput.innerHTML = `Fra arrow funksjon: ${ Math.random() }`;

regularFunctionBtn.addEventListener( "click", getARandomNumberRegular );
arrowFunctionBtn.addEventListener( "click", getARandomNumberArrow );