const validInp = document.querySelector('#validation-input');
    
validInp.addEventListener('blur', function () {
    if (Number(this.dataset.length) === this.value.length) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    }

    else {
        this.classList.add('invalid');
        this.classList.remove('valid');
    };
});


// document.querySelector('#validation-input').addEventListener('blur', function() {
//     if (Number(this.dataset.length) === this.value.length) {
//         this.classList.add('valid');
//         this.classList.remove('invalid');
//     }

//     else {
//         this.classList.add('invalid');
//         this.classList.remove('valid');
//     };
// });