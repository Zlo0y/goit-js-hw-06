const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSize.addEventListener('input', function () {
    text.style.fontSize = `${this.value}px`;
});


// document.querySelector('#font-size-control').addEventListener('input', function () {
//     document.querySelector('#text').style.fontSize = `${this.value}px`;

// })