// ============================================
// Weapon Memory Match Game
// ============================================

// Game State
let gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    timer: 0,
    timerInterval: null,
    gameStarted: false
};

// Weapon images for the memory game (using 8 weapons for 16 cards)
const weaponImages = [
    'images/weapon1.png',
    'images/weapon2.png',
    'images/weapon3.png',
    'images/weapon1.png', // Reuse for variety
    'images/weapon2.png',
    'images/weapon3.png',
    'images/weapon1.png',
    'images/weapon2.png'
];

// DOM Elements
const gameBoard = document.getElementById('game-board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const matchesDisplay = document.getElementById('matches');
const resetBtn = document.getElementById('reset-btn');
const victoryModal = document.getElementById('victory-modal');
const playAgainBtn = document.getElementById('play-again-btn');
const finalTimeDisplay = document.getElementById('final-time');
const finalMovesDisplay = document.getElementById('final-moves');
const particlesContainer = document.getElementById('particles');

// ============================================
// Initialize Game
// ============================================

function initGame() {
    // Reset game state
    gameState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        moves: 0,
        timer: 0,
        timerInterval: null,
        gameStarted: false
    };

    // Update displays
    updateDisplays();

    // Stop any existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    // Create card deck (pairs of each weapon)
    const cardDeck = [...weaponImages, ...weaponImages];
    
    // Shuffle cards
    gameState.cards = shuffleArray(cardDeck);

    // Render cards
    renderCards();

    // Close victory modal if open
    victoryModal.classList.remove('active');
}

// ============================================
// Shuffle Array
// ============================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ============================================
// Render Cards
// ============================================

function renderCards() {
    gameBoard.innerHTML = gameState.cards.map((weapon, index) => `
        <div class="card" data-index="${index}" data-weapon="${weapon}">
            <div class="card-face card-back"></div>
            <div class="card-face card-front">
                <img src="${weapon}" alt="Weapon">
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
}

// ============================================
// Handle Card Click
// ============================================

function handleCardClick(e) {
    const card = e.currentTarget;
    
    // Start timer on first click
    if (!gameState.gameStarted) {
        startTimer();
        gameState.gameStarted = true;
    }

    // Ignore if card is already flipped or matched
    if (card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }

    // Ignore if two cards are already flipped
    if (gameState.flippedCards.length === 2) {
        return;
    }

    // Flip the card
    card.classList.add('flipped');
    gameState.flippedCards.push(card);

    // Check for match if two cards are flipped
    if (gameState.flippedCards.length === 2) {
        gameState.moves++;
        updateDisplays();
        checkForMatch();
    }
}

// ============================================
// Check for Match
// ============================================

function checkForMatch() {
    const [card1, card2] = gameState.flippedCards;
    const weapon1 = card1.dataset.weapon;
    const weapon2 = card2.dataset.weapon;

    if (weapon1 === weapon2) {
        // Match found!
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            gameState.flippedCards = [];
            gameState.matchedPairs++;
            updateDisplays();

            // Check for win
            if (gameState.matchedPairs === 8) {
                setTimeout(() => {
                    endGame();
                }, 500);
            }
        }, 500);
    } else {
        // No match
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            gameState.flippedCards = [];
        }, 1000);
    }
}

// ============================================
// Timer Functions
// ============================================

function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timer++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timer / 60);
    const seconds = gameState.timer % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// ============================================
// Update Displays
// ============================================

function updateDisplays() {
    movesDisplay.textContent = gameState.moves;
    matchesDisplay.textContent = `${gameState.matchedPairs}/8`;
    updateTimerDisplay();
}

// ============================================
// End Game
// ============================================

function endGame() {
    // Stop timer
    clearInterval(gameState.timerInterval);

    // Update final stats
    finalTimeDisplay.textContent = timerDisplay.textContent;
    finalMovesDisplay.textContent = gameState.moves;

    // Show victory modal
    victoryModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Create celebration particles
    createCelebrationParticles();
}

// ============================================
// Create Celebration Particles
// ============================================

function createCelebrationParticles() {
    const colors = ['#FFD700', '#FFA500', '#FF6347', '#DC143C'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: -20px;
            animation: fall ${2 + Math.random() * 3}s linear forwards;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}

// Add fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Create Background Particles
// ============================================

function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// Event Listeners
// ============================================

resetBtn.addEventListener('click', initGame);

playAgainBtn.addEventListener('click', () => {
    victoryModal.classList.remove('active');
    document.body.style.overflow = '';
    initGame();
});

victoryModal.querySelector('.modal-overlay')?.addEventListener('click', () => {
    victoryModal.classList.remove('active');
    document.body.style.overflow = '';
});

// ============================================
// Initialize on Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initGame();
});
