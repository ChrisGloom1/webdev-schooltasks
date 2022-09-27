import TextManipulationModule from './modules/TextManipulationModule.js';

const textTxt = document.querySelector("#text-txt");
const reverseTextBtn = document.querySelector("#reverse-text-btn");
const textOutput = document.querySelector("#text-output");

const reverseText = () => {
  const text = textTxt.value;
  const reversedText = TextManipulationModule.reverseText(text);
  textOutput.innerHTML = `<p>${reversedText}</p>`;
}

reverseTextBtn.addEventListener("click", reverseText);