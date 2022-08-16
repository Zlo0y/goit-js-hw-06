let counterValue = 0;

document.querySelectorAll("[data-action]").forEach(act => {
    act.addEventListener('click', () => {act.dataset.action === 'decrement' ? counterValue -= 1 : counterValue += 1;
    document.querySelector('#value').textContent = counterValue})
})
