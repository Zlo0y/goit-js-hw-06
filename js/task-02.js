const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listSelector = document.querySelector('#ingredients');

const ulEl = ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  return newEl;
});

listSelector.append(...ulEl);

// document.querySelector('#ingredients').append(...ingredients.map(ingredient => {
//   const newEl = document.createElement('li');
//   newEl.textContent = ingredient;
//   newEl.classList.add('item');
//   return newEl;
// }));