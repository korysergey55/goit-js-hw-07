const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const item = ingredients.map(ing =>{

  const li = document.createElement('li');
  li.textContent = ing;
  return li;
})
console.log(item);

const ent = document.querySelector('#ingredients');
ent.append(...item);