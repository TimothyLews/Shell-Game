const cups = document.querySelectorAll('.cup');
const startButton = document.getElementById('startButton');

let winningCup;
let gameStarted = false;

startButton.addEventListener('click', startGame);

function startGame() {
    if (gameStarted) {
        resetGame();
    }

    // Shuffle the cups
    shuffleCups();

    // Randomly select the winning cup
    winningCup = Math.floor(Math.random() * 3);

    gameStarted = true;
}

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        if (gameStarted) {
            if (index === winningCup) {
                cup.textContent = 'Win!';
                cup.style.backgroundColor = 'green';
            } else {
                cup.textContent = 'Lose';
                cup.style.backgroundColor = 'red';
            }
            revealCups();
        }
    });
});

function resetGame() {
    cups.forEach((cup) => {
        cup.textContent = '';
        cup.style.backgroundColor = '#333';
    });

    gameStarted = false;
}

function shuffleCups() {
    const cupArray = Array.from(cups);
    cupArray.sort(() => Math.random() - 0.5);
    cupArray.forEach((cup, index) => {
        cup.style.order = index;
    });
}

function revealCups() {
    cups[winningCup].style.backgroundColor = 'green';
    cups.forEach((cup, index) => {
        if (index !== winningCup) {
            cup.style.backgroundColor = 'red';
        }
    });
}