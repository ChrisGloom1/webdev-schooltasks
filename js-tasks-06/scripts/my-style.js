const btnChangeStyling = document.querySelector( "#btn-change-styling" );

const setStyleFromLocalStorage = () => {
  const arrStyling = [];
  const stylingFromLS = localStorage.getItem( "newStyle" );
  const stylingFromLSParsed = JSON.stringify( stylingFromLS );
  arrStyling.push( stylingFromLSParsed );
  console.log( arrStyling );
  document.body.style.color = arrStyling.txtClr;
  document.body.style.backgroundColor = arrStyling.bgClr;
  console.log( arrStyling.txtClr );
  console.log( arrStyling.bgClr );
};

// ( () => setStyleFromLocalStorage() ) ();

btnChangeStyling.addEventListener( "click", setStyleFromLocalStorage );