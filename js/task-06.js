// // Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inpt = document.querySelector("#validation-input");

inpt.addEventListener("blur", changeBorder);

function replaseClases(classAdd, classRemove) {
  inpt.classList.add(classAdd);
  inpt.classList.remove(classRemove);
}

function changeBorder() {
  if (Number(inpt.dataset.length) === inpt.value.length) {
    replaseClases("valid", "invalid");
  } else {
    replaseClases("invalid", "valid");
  }
}

// function changeBorder() {
//   if (Number(inpt.dataset.length) === inpt.value.length) {
//     inpt.classList.add("valid");
//     inpt.classList.remove("invalid");
//   } else {
//     inpt.classList.add("invalid");
//     inpt.classList.remove("valid");
//   }
// }
