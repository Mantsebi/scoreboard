// Get references to DOM elements
const homeScoreDisplay = document.querySelector('.team-section:first-child .digital-number');
const guestScoreDisplay = document.querySelector('.team-section:last-child .digital-number');

const homeButtons = document.querySelectorAll('.team-section:first-child .score-button');
const guestButtons = document.querySelectorAll('.team-section:last-child .score-button');

// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Update display function
function updateDisplay() {
    homeScoreDisplay.textContent = homeScore;
    guestScoreDisplay.textContent = guestScore;
}

// Add event listeners to HOME buttons
homeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const points = parseInt(button.textContent.replace('+', ''));
        homeScore += points;
        updateDisplay();
    });
});

// Add event listeners to GUEST buttons
guestButtons.forEach(button => {
    button.addEventListener('click', () => {
        const points = parseInt(button.textContent.replace('+', ''));
        guestScore += points;
        updateDisplay();
    });
});

// Optional: Add reset functionality (double-click on score to reset)
homeScoreDisplay.addEventListener('dblclick', () => {
    homeScore = 0;
    updateDisplay();
});

guestScoreDisplay.addEventListener('dblclick', () => {
    guestScore = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();