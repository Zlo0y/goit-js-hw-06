function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const colorHex = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
    
  document.body.style.backgroundColor = randomColor;
  colorHex.textContent = randomColor;
});


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// document.querySelector('.change-color').addEventListener('click', () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   document.querySelector('.color').textContent = getRandomHexColor();
// })