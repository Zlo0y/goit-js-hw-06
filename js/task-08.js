document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const {
    currentTarget,
    currentTarget: {elements: {email, password}},
    } = event;

    if (!email.value || !password.value) {
    alert('Все поля должны быть заполнены!');
    } else {
    console.log({
        'email': email.value,
        'password': password.value
    });
    }
    currentTarget.reset();
})
