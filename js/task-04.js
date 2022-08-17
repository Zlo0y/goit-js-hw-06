let counterValue = 0;

const value = document.querySelector('#value');
const incEv = document.querySelector('[data-action="increment"]');
const decEv = document.querySelector('[data-action="decrement"]');

incEv.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

decEv.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});


// let counterValue = 0;

// document.querySelectorAll("[data-action]").forEach(act => {
//     act.addEventListener('click', () => {act.dataset.action === 'decrement' ? counterValue -= 1 : counterValue += 1;
//     document.querySelector('#value').textContent = counterValue})
// })