// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector("#value");
const btnDecrement = document.querySelector(
  "button[data-action = 'decrement']"
);
const btnincrement = document.querySelector(
  "button[data-action = 'increment']"
);

let counterValue = 0;
function increment() {
    counterValue += 1;
    updateValue();
};
 
function decrement() {
     counterValue -= 1;
   updateValue();
};

function updateValue() {
    valueRef.textContent = counterValue;
};

btnDecrement.addEventListener("click", decrement);

btnincrement.addEventListener("click", increment);

//console.log(btnDecrement);
//console.log(btnincrement);
//console.log(counterValue);
