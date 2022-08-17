function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divBox = document.querySelector('#boxes');

function createBoxes(amount) {
  let divParam = 30;
  const arrBoxes = [];
  for (let i = 1; i <= amount; i += 1){
    const randomColor = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${divParam}px`;
    box.style.height = `${divParam}px`;
    box.style.backgroundColor = randomColor;
    arrBoxes.push(box);
    divParam += 10;
  }
  divBox.append(...arrBoxes);
};

btnCreate.addEventListener('click', () => createBoxes(Number(inputValue.value)));
btnDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
  inputValue.value = '';
});
