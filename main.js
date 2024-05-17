// General Variables
const choices = ["rock", "paper", "scissors"];
const rpsButtons = document.querySelectorAll(".choice");

let putHumanScore = document.querySelector(".human-score");
let putComputerScore = document.querySelector(".computer-score");

const flips = document.querySelectorAll(".flip-content");

const humanSelectionImg = document.querySelector("#humanSelection");
const computerSelectionImg = document.querySelector("#computerSelection");

const roundResult = document.querySelector("#roundResult");
const roundModal = document.querySelector("#roundModal");
const closeRoundModal = document.querySelector("#clearRoundResult");

const winnerResult = document.querySelector("#gameResult");
const winnerModal = document.querySelector("#gameModal");
const resetBtn = document.querySelector("#resetGame");

let humanScore = 0;
let computerScore = 0;

// Text Variables
let tieRound = "It's a tie";
let humanWinRound = "You won this round!";
let computerWinRound = "You lost this round!";

let tieGame = "It's a tie! Try another game!";
let humanWinGame = "Well done!! You won against the computer!";
let computerWinGame = "You lost...The computer has defeated you.";

// Play Game with max. 5 points
function playGame(event) {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();
    humanSelectionImg.src = `./images/${humanSelection}.png`;
    computerSelectionImg.src = `./images/${computerSelection}.png`;
    const winner = getRoundWinner(humanSelection, computerSelection);
    showRoundWinner(winner);
    flipChoice();

    if (humanScore < 5 && computerScore < 5) {
        showRoundModal();
    } else if (humanScore === 5 || computerScore === 5) {
        showWinnerModal();
    }
}

// Randomly generate computer's choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

// Flip Selections
function flipChoice() {
    flips.forEach(flip => {
        flip.classList.add("flipped");
    });
}

// Unflip Selections
function unflipChoice() {
    flips.forEach(flip => {
        flip.classList.remove("flipped");
    });
}

// Get Round Winner
function getRoundWinner(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "draw";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        } else {
            return "human";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            return "human";
        } else {
            return "computer";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer";
        } else {
            return "human";
        }
    }
}

// Show Round Winner
function showRoundWinner(winner) {
    if (winner === "human") {
        humanScore++;
        roundResult.textContent = humanWinRound;
        putHumanScore.textContent = humanScore;
    } else if (winner === "computer") {
        computerScore++;
        roundResult.textContent = computerWinRound;
        putComputerScore.textContent = computerScore;
    } else {
        roundResult.textContent = tieRound;
    }
}

// Show Round Modal
function showRoundModal() {
    roundModal.classList.add("show-result");
}

// Clear Round Modal
function clearRoundModal() {
    roundModal.classList.remove("show-result");
    unflipChoice();
}

// Show Winner Modal
function showWinnerModal() {
    if (humanScore === 5) {
        winnerModal.classList.add("show-result");
        winnerResult.textContent = humanWinGame;
    } else if (computerScore === 5) {
        winnerModal.classList.add("show-result");
        winnerResult.textContent = computerWinGame;
    }
}

// Reset Game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    putHumanScore.textContent = humanScore;
    putComputerScore.textContent = computerScore;
    unflipChoice();
}

// Clear Winner Modal
function clearWinnerModal() {
    winnerModal.classList.remove("show-result");
    unflipChoice();
}

// Event Listeners
rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener("click", (event) => {playGame(event)})
});

closeRoundModal.addEventListener("click", () => {
    clearRoundModal();
});

resetBtn.addEventListener("click", () => {
    clearWinnerModal();
    resetGame();
})