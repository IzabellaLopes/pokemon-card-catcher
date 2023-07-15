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

// Create the memory game
function createMemoryGame() {
    const memoryGame = document.querySelector('.memory-game');

    characters.forEach(character => {
        const card = createMemoryCard(character);
        memoryGame.appendChild(card);
    });
}

// Call the function to create the memory game
createMemoryGame();