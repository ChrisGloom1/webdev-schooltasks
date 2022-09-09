const num1 = document.querySelector( "#num1" );
const num2 = document.querySelector( "#num2" );
const multiplyBtn = document.querySelector( "#multiply-btn" );
const additionBtn = document.querySelector( "#addition-btn" );
const subtractBtn = document.querySelector( "#subtract-btn" );
const divideBtn = document.querySelector( "#divide-btn" );
const doAllBtn = document.querySelector( "#do-all-btn" );
const multiplyOutput = document.querySelector("#multiply-output")
const additionOutput = document.querySelector( "#addition-output" );
const subtractOutput = document.querySelector( "#subtract-output" );
const divideOutput = document.querySelector( "#divide-output" );
let number1 = num1.value;
let number2 = num2.value;

function multiplyNum1AndNum2(){
  number1 = num1.value;
  number2 = num2.value;
  result = multiplication( number1, number2 );
  multiplyOutput.innerHTML = result;
}
function multiplication( number1, number2 ){
  return number1 * number2;
};

const additionNum1AndNum2 = () => {
  number1 = parseInt(num1.value);
  number2 = parseInt(num2.value);
  result = number1 + number2;
  additionOutput.innerHTML = result;
}
const subtractNum1AndNum2 = () => {
  number1 = parseInt(num1.value);
  number2 = parseInt(num2.value);
  result = number1 - number2;
  subtractOutput.innerHTML = result;
}
const divideNum1AndNum2 = () => {
  number1 = parseInt(num1.value);
  number2 = parseInt(num2.value);
  result = number1 / number2;
  divideOutput.innerHTML = result;
}

const doAll = () =>{
  multiplyNum1AndNum2();
  additionNum1AndNum2();
  subtractNum1AndNum2();
  divideNum1AndNum2();
}

multiplyBtn.addEventListener( "click", multiplyNum1AndNum2 );
additionBtn.addEventListener( "click", additionNum1AndNum2 );
subtractBtn.addEventListener( "click", subtractNum1AndNum2 );
divideBtn.addEventListener( "click", divideNum1AndNum2 );
doAllBtn.addEventListener( "click", doAll );