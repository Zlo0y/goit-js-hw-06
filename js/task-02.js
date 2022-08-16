const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector('#ingredients').append(...ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  return newEl;
}));
