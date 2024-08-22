const form = document.querySelector('.login-form');

const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email;
    const password = form.elements.password;

    if (!email.value || !password.value) {
        alert('All form fields must be filled in');
        return; 
    }

    const data = {
        formEmail: email.value,
        formPass: password.value,
    };
    console.log('data:', data);

    form.reset();
};

form.addEventListener('submit', handleFormSubmit);
