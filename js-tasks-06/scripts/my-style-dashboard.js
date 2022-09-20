const inpTxtClr = document.querySelector( "#inp-txt-clr" );
const inpBgClr = document.querySelector( "#inp-bg-clr" );
const outputDiv = document.querySelector( "#output-div" );
const btnSaveStyling = document.querySelector( "#btn-save-styling" );
const btnDelStyling = document.querySelector( "#btn-del-styling" );

const addStyling = () => {
  const txtClr = inpTxtClr.value;
  const bgClr = inpBgClr.value;
  const newStyle = { txtClr: txtClr, bgClr: bgClr };

  let arrStyling;
  if ( checkIfArrayExists() ){
    const arrInLocalStorage = localStorage.getItem( "newStyle" );
    const parsedArrInLocalStorage = JSON.parse( arrInLocalStorage );
    arrStyling = parsedArrInLocalStorage;
  } else {
    arrStyling = [];
  }
  arrStyling.push( newStyle );
  const stringifiedArr = JSON.stringify( arrStyling );
  localStorage.setItem( "newStyle", stringifiedArr );
}

const checkIfArrayExists = () => {
  const doesExist = localStorage.getItem( "newStyle" ) === null ? false : true;
  return doesExist; 
};

// Selvkallende funksjon med anonym funksjon inni -> kjører i det siden blir lastet
// (  () => { kodeblokk }  )();

(() => console.log(checkIfArrayExists()))();

btnSaveStyling.addEventListener( "click", addStyling );