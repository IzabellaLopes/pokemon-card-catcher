// Player's name and play button
const input = document.getElementsByClassName('login-input')[0];
const button = document.getElementsByClassName('login-button')[0];
const form = document.getElementsByClassName('login-form')[0];

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

function validateInput({ target }) {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = 'game.html'
}
