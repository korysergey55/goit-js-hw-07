// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inpt = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

inpt.addEventListener("input", changeText);

function changeText() {
    text.style.fontSize = inpt.value + "px";
    console.log(inpt.value);
}

