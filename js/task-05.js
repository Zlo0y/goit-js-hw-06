const nameInp = document.querySelector('#name-input');
const anon = document.querySelector('#name-output');

    nameInp.addEventListener('input', function () {
    anon.textContent = !this.value ? 'Anonymous' : this.value.trim()});


// document.querySelector('#name-input').addEventListener('input', function() {
//     document.querySelector('#name-output').textContent = !this.value ? 'Anonymous' : this.value.trim()});
