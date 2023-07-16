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

// Array to store the currently revealed cards
let revealedCards = [];

// Reveal the card when clicked
function revealCard(event) {
    const card = event.target.parentElement;

    // Check if the card is already revealed or if there are already two revealed cards
    if (card.classList.contains('revealed') || revealedCards.length === 2) {
        return;
    }

    card.classList.add('revealed');
    revealedCards.push(card);

    // Check if two cards are revealed
    if (revealedCards.length === 2) {
        const [card1, card2] = revealedCards;
        const character1 = card1.querySelector('.front').style.backgroundImage;
        const character2 = card2.querySelector('.front').style.backgroundImage;

        // Check if the characters are the same
        if (character1 === character2) {
            // Cards are the same, keep them revealed
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

// Add click event listener to all memory cards
function addCardClickListeners() {
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', revealCard);
    });
}

// Call this function after creating the memory game
addCardClickListeners();

