const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

if (nameInput && nameOutput) {
    nameInput.addEventListener('input', (event) => {
        const nameValue = event.target.value.trim(); 
        nameOutput.textContent = nameValue || 'Anonymous'; 
    });
}