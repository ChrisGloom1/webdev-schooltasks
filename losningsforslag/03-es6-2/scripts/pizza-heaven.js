/*
    ***
    HTML objects
    ***
*/
const addShrimpBtn = document.querySelector("#add-shrimp-btn");
const addHawaiiBtn = document.querySelector("#add-hawaii-btn");
const shoppingCartDiv = document.querySelector("#shopping-cart-div");


/*
    ***
    Variables
    ***
*/
const shoppingCart = [];


/*
    ***
    Functions
    ***
*/
const addShrimp = () => { // Alternativ måte 1 å legge til pizza til handlekurv
    shoppingCart.push( { name: "Rekefantasi", price: 199 } );
    showShoppingCart()
}

const addHawaii = () => { // Alternativ måte 2 å legge til pizza til handlekurv
    addToShoppingCart( { name: "Hawaii", price: 159 } );    
}

const addToShoppingCart = ( pizza ) => {
    shoppingCart.push( pizza );
    showShoppingCart();
}

const showShoppingCart = () => {
    
    if( shoppingCart.length > 0 ){
        let htmlTxt = "";

        shoppingCart.forEach( item => {
            htmlTxt += `
                <article>
                    <h3>${ item.name }</h3>    
                    <p>${ item.price}</p>
                </article>
            `;
        })      
        
        shoppingCartDiv.innerHTML = `
            <p>Totalpris: ${ getTotalPrice() }</p> 
            ${htmlTxt}
        `;

    }else{
        shoppingCartDiv.innerHTML = "Handlekurven er tom.";
    }
}

const getTotalPrice = () => shoppingCart.reduce( ( total, pizza ) => total + pizza.price, 0  );


/*
    ***
    Events
    ***
*/
showShoppingCart();
addShrimpBtn.addEventListener("click", addShrimp);
addHawaiiBtn.addEventListener("click", addHawaii);