const setStyleFromLocalStorage = () => {
  const stylingFromLSParsed = JSON.parse( localStorage.getItem( "newStyle" ) );
  document.body.style.color = stylingFromLSParsed[0].txtClr;
  document.body.style.backgroundColor = stylingFromLSParsed[0].bgClr;
};

( () => setStyleFromLocalStorage() ) ();