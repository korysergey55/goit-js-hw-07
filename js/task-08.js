// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const ipt = document.querySelector("[type='number']");
const btnRange = document.querySelector("[data-action='render']");
const btn = document.querySelector("[data-action='destroy']");
const box = document.querySelector("#boxes");

function addBox() {
  const amount = inputPut();
  const templates = createBoxes(amount);
  clearBoxes(false);
  showBox(templates);
}
function inputPut() {
  return ipt.value;
}
function rondomEnterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.classList.add("item");
    div.style.backgroundColor = `rgb(${rondomEnterval(
      0,
      255
    )}, ${rondomEnterval(0, 255)}, ${rondomEnterval(0, 255)})`;
    arr.push(div);
  }
  return arr;
}

function showBox(arr) {
  box.append(...arr);
}

function clearBoxes(bul = true) {
  box.innerHTML = "";
  if (bul) ipt.value = 0;
}

btnRange.addEventListener("click", addBox);
btn.addEventListener("click", clearBoxes);
