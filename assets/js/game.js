let playerName = localStorage.getItem('player');
let moves = 0;
let timerTimeout;
let finalTime = "00:00";
let isGameEnded = false;

//Memory card
//Create an array of characters
const characters = [
    'pikachu-thiago',
    'squirtle-julia',
    'charizard-julia',
    'jigglypuff-thiago',
    'charmander-thiago',
    'bulbasaur-julia',
    'charizard-thiago',
    'pikachu-julia',
    'charmander-julia',
    'bulbasaur-thiago',
    'wigglypuff-thiago',
    'piplup',
    'mew',
    'mewtwo',
    'oshawott',
    'ash',
];

// Create a card
function createMemoryCard(character) {
    const card = document.createElement('div');
    card.classList.add('memory-card');

    const frontFace = document.createElement('div');
    frontFace.classList.add('face', 'front');
    frontFace.style.backgroundImage = `url(assets/images/${character}.webp)`;
    frontFace.setAttribute('data-character', character); // Add the data attribute
    card.appendChild(frontFace);

    const backFace = document.createElement('div');
    backFace.classList.add('face', 'back');
    card.appendChild(backFace);

    return card;
}

//Duplicate characters
function duplicateCharacters(charactersArray) {
    return charactersArray.concat(charactersArray);
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create the memory game with dynamic grid based on data attributes
function createMemoryGame() {
    const memoryGame = document.querySelector('.memory-game');
    const urlParams = new URLSearchParams(window.location.search);
    const columns = parseInt(urlParams.get('columns'));
    const rows = parseInt(urlParams.get('rows'));
    const totalCards = columns * rows;

    // Check if columns and rows are valid numbers
    if (isNaN(columns) || isNaN(rows) || columns <= 0 || rows <= 0) {
        console.error('Invalid number of columns or rows.');
        return;
    }

    // Create an array with the specified number of characters for the memory game
    const selectedCharacters = characters.slice(0, totalCards / 2);
    const duplicatedCharacters = duplicateCharacters(selectedCharacters);
    const shuffledCharacters = shuffleArray(duplicatedCharacters);

    // Create memory cards based on the selected characters
    shuffledCharacters.forEach(character => {
        const card = createMemoryCard(character);
        memoryGame.appendChild(card);
    });

    // Dynamically set the grid style based on the number of columns and rows
    memoryGame.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    memoryGame.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

// Call the function to create the memory game
createMemoryGame();

// Array to store the currently revealed cards
let revealedCards = [];

// Array to store the matched cards
let matchedCards = [];

// Reveal the card when clicked
function revealCard(event) {
    const card = event.target.parentElement;


    console.log("^clicked, ====>", card);

    // Check if the card is already revealed or if there are already two revealed cards
    if (card.classList.contains('revealed') || revealedCards.length === 2) {
        return;
    }

    // Prevent revealing the same card twice
    if (revealedCards.includes(card)) {
        return;
    }

    card.classList.add('revealed');
    revealedCards.push(card);

    // Start the timer if it hasn't started yet
    if (revealedCards.length === 1) {
        startTimer();
    }

    // Check if two cards are revealed
    if (revealedCards.length === 2) {
        const [card1, card2] = revealedCards;
        const character1 = card1.querySelector('.front').getAttribute('data-character'); // Get the data attribute
        const character2 = card2.querySelector('.front').getAttribute('data-character'); // Get the data attribute

        moves++; // Increment the moves count
        document.getElementById('movements').textContent = moves;

        // Check if the characters are the same
        if (character1 === character2) {
            // Cards are the same, keep them revealed and add the "disabled-card" class to the memory-card div
            card1.firstChild.classList.add('disabled-card');
            card2.firstChild.classList.add('disabled-card');
            matchedCards.push(card1.firstChild, card2.firstChild);

            if (isGameOver()) {
            }

            revealedCards = [];

        } else {
            // Cards are different, wait for 1 second and then hide them again
            setTimeout(() => {
                card1.classList.remove('revealed');
                card2.classList.remove('revealed');
                revealedCards = [];
            }, 1000);
        }
    }
}

console.log("^clicked, ====>");

// Add click event listener to all memory cards
function addCardClickListeners() {

    console.log("^clicked, ====>");
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', revealCard);
    });
}

// Check if the game is over
function isGameOver() {
    // Check if all memory cards have the 'disabled-card' class
    const memoryCards = document.querySelectorAll('.memory-card');
    for (const card of memoryCards) {
        if (!card.querySelector('.front').classList.contains('disabled-card')) {
            // If any card is not disabled, the game is not over
            return false;
        }
    }

    // If all cards are disabled, the game is over
    isGameEnded = true; // Set the flag to indicate game over
    stopTimer(); // Stop the timer without resetting it

    // Results modal
    const resultsModal = document.getElementById('container_results');
    const modalPlayerName = document.getElementById('modal-player-name');
    const modalMovements = document.getElementById('modal-movements');
    const modalTime = document.getElementById('modal-time');

    modalPlayerName.textContent = playerName;
    modalMovements.textContent = moves;
    modalTime.textContent = finalTime; // Add the finalTime

    resultsModal.style.display = 'block';

    return true;
}

// Reset the timer to 00:00
function resetTimer() {
    stopTimer();
    timer.innerHTML = '00:00';
}

// Add player's name introduced on the homepage
const spanPlayer = document.querySelector('.player');

window.onload = () => {
    spanPlayer.innerHTML = playerName;

    moves = 0; // Initialize moves count to zero
    document.getElementById('movements').textContent = moves;

    // Call this function after creating the memory game
    addCardClickListeners();

    // Play again results modal
    const resultsModal = document.getElementById('container_results');
    const closeResults = document.getElementById('close-results');
    const playAgain = document.getElementById('play-again');

    closeResults.addEventListener('click', function () {
        resultsModal.style.display = 'none';
    });

    playAgain.addEventListener('click', () => {
        // Redirect the user to index.html
        window.location.href = 'index.html';
    });
};

// Implement a timer in the game
// Created using the external source - https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak
const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var finalSec = 0;
var finalMin = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

// Stop the timer and update final time
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
        clearTimeout(timerTimeout);

        // Store the current time in finalSec and finalMin
        finalSec = sec;
        finalMin = min;

        // Format the final time to "mm:ss" and store it in finalTime
        const formattedMin = String(finalMin).padStart(2, '0');
        const formattedSec = String(finalSec).padStart(2, '0');
        finalTime = formattedMin + ":" + formattedSec;

        // Update the timer display with the final time
        timer.innerHTML = finalTime;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }
        if (min < 10 || min == 0) {
            min = "0" + min;
        }
        timer.innerHTML = min + ":" + sec;
        timerTimeout = setTimeout("timerCycle()", 1000);
    }
}

// Quit button
const quitButton = document.getElementById('quit-button');

quitButton.addEventListener('click', () => {
    // Redirect the user to index.html
    window.location.href = 'index.html';
});