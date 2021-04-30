// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inpt = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
console.log(inpt, outputText);

inpt.addEventListener("input", changeText);

function changeText() {
  if (inpt.value === "") {
    outputText.textContent = "незнакомец";
  } else {
    outputText.textContent = inpt.value;
  }
}
