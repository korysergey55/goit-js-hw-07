// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const btnDecrement = document.querySelector("button[data-action='increment']");
const btnIncrement = document.querySelector("button[data-action = 'decrement']");
const btnValue = document.querySelector("#value");
//console.log(btnIncrement, btnDecrement, btnValue);

let counterValue = 0;
function incrementFunc() {
    counterValue += 1;
    totalResult();
};
function decrimentFunc() {
    counterValue -= 1;
    totalResult();
};

function totalResult() {
     btnValue.textContent = counterValue;
};
btnDecrement.addEventListener("click", incrementFunc);
btnIncrement.addEventListener("click", incrementFunc);






























// const valueRef = document.querySelector("#value");
// const btnDecrement = document.querySelector(
//   "button[data-action = 'decrement']"
// );
// const btnincrement = document.querySelector(
//   "button[data-action = 'increment']"
// );

// let counterValue = 0; 
// function increment() {
//   counterValue += 1;
//   updateValue();
// }

// function decrement() {
//   counterValue -= 1;
//   updateValue();
// }

// function updateValue() {
//   valueRef.textContent = counterValue;
// }

// btnDecrement.addEventListener("click", decrement);

// btnincrement.addEventListener("click", increment);
