//Memory card
//Create an array of characters
const characters = [
    'arceus',
    'ash',
    'bulbasaur',
    'butterfree',
    'charizard',
    'charmander',
    'dragonite',
    'eevee',
    'jigglypuff',
    'meowth',
    'mew',
    'mewtwo',
    'pikachu',
    'piplup',
    'scorbunny',
    'squirtle',
];

// Create a card
function createMemoryCard(character) {
    const card = document.createElement('div');
    card.classList.add('memory-card');

    const frontFace = document.createElement('div');
    frontFace.classList.add('face', 'front');
    frontFace.style.backgroundImage = `url(/assets/images/${character}.webp)`;
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

// Create the memory game
function createMemoryGame() {
    const memoryGame = document.querySelector('.memory-game');

    const duplicatedCharacters = duplicateCharacters(characters);
    const shuffledCharacters = shuffleArray(duplicatedCharacters);

    shuffledCharacters.forEach(character => {
        const card = createMemoryCard(character);
        memoryGame.appendChild(card);
    });
}

// Call the function to create the memory game
createMemoryGame();

// Reveal the card when clicked
function revealCard(event) {
    const card = event.target.parentElement;
    card.classList.toggle('revealed');
}

// Add click event listener to all memory cards
function addCardClickListeners() {
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', revealCard);
    });
}

// Call this function after creating the memory game
addCardClickListeners();