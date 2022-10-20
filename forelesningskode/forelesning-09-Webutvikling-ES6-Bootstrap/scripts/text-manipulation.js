import TextManipulationModule from './modules/TextManipulationModule.js';

const textTxt = document.querySelector("#text-txt");
const reverseTextBtn = document.querySelector("#reverse-text-btn");
const textOutput = document.querySelector("#text-output");

const reverseText = () => {
    /* Gjøre bruk av TextManipulationModule her. */
    
    let htmlTxt = ""; // deklarer en variabel og initierer med tom streng.

    const inputTxt = textTxt.value; // henter det brukeren har tastet inn i tekstboks

    const newText = TextManipulationModule.reverseText( inputTxt ); // bruker modulen for å reversere teksten; vi sender inn inputTxt (det brukeren tastet inn) til modulen

    htmlTxt += `<p>${newText}</p>`; // bruker template literal med embedded expression

    textOutput.innerHTML = htmlTxt; // skriver ut htmlTxt til innerHTML til seksjonen på HTML-siden
}

reverseTextBtn.addEventListener("click", reverseText);