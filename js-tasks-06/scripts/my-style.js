const btnChangeStyling = document.querySelector( "#btn-change-styling" );

const setStyleFromLocalStorage = () => {
  const arrStyling = [];
  const bgClrInLS = localStorage.getItem( "newStyle" );
  const bgClrInLSParsed = JSON.stringify( bgClrInLS );
  arrStyling.push( bgClrInLSParsed );
  console.log( arrStyling );
  document.body.style.color = arrStyling.txtClr;
  document.body.style.backgroundColor = arrStyling.bgClr;
  console.log( arrStyling.txtClr );
  console.log( arrStyling.bgClr );

};

// ( () => setStyleFromLocalStorage() ) ();

btnChangeStyling.addEventListener( "click", setStyleFromLocalStorage );


