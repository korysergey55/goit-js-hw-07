// // Напиши скрипт для создания галлереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const enterImg = images
  .map(
    (item) =>
      `<li><img width ='500px' height ='300px' src =${item.url} alt=${item.alt}></li> `
  )
  .join("");
const listGalery = document.querySelector("#gallery");
listGalery.insertAdjacentHTML("beforeend", enterImg);
listGalery.style.cssText =
  "display: flex; justify-content: space-around; list-style: none;";
listGalery.style.marginRight = "20px";
