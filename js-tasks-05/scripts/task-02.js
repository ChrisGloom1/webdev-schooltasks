const diavolaBtn = document.querySelector( "#diavola-btn" );
const finocchionaBtn = document.querySelector( "#finocchiona-btn" );
const divOutputShoppingCart = document.querySelector( "#div-output-shopping-cart" );
const shoppingCartArray = [];

const addDiavolaToShoppingCart = () => {
  shoppingCartArray.push( { name: "Diavola", price: 199 } );
  showShoppingCart();
};

const addFinocchionaToShoppingCart = () => {
  shoppingCartArray.push ( { name: "Finocchiona", price: 169 } );
  showShoppingCart();
};

const showShoppingCart = () => {
  if ( shoppingCartArray.length > 0 ){
    let htmlTxt = ""; 
    shoppingCartArray.forEach( pizza => {
      htmlTxt += `
      <article>
        <h3>${pizza.name}</h3>
        <p>${pizza.price}</p>
      </article>
      `;
    })
    divOutputShoppingCart.innerHTML = `
    <h4>Totalpris: ${ getTotalPrice() }</h4>
    ${ htmlTxt }
    `;
  } else {
    divOutputShoppingCart.innerHTML = "Handlekurven din er tom.";
  }
}


const getTotalPrice = () => shoppingCartArray.reduce( ( acc, curr ) => acc + curr.price, 0 );

showShoppingCart();
diavolaBtn.addEventListener( "click", addDiavolaToShoppingCart );
finocchionaBtn.addEventListener( "click", addFinocchionaToShoppingCart );
