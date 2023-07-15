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
}

//Level of difficulty
//Created using the tutorial - https://www.youtube.com/watch?v=XH5OW46yO8I
const login_button = document.getElementById('login_button');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const btn_easy = document.getElementById('btn_easy');
const btn_medium = document.getElementById('btn_medium');
const btn_hard = document.getElementById('btn_hard');

login_button.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
