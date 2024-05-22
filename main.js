// General Variables
const choices = ["rock", "paper", "scissors"];
const rpsButtons = document.querySelectorAll("button.choice");

let putHumanScore = document.querySelector(".human-score");
let putComputerScore = document.querySelector(".computer-score");

const flips = document.querySelectorAll(".flip-content");

const humanSelectionImg = document.querySelector("#humanSelection");
const computerSelectionImg = document.querySelector("#computerSelection");

const roundResult = document.querySelector("#roundResult");
const roundModal = document.querySelector("#roundModal");
const closeRoundModal = document.querySelector("#clearRoundResult");
const roundColor = document.querySelector("#roundColor");

const winnerResult = document.querySelector("#gameResult");
const winnerModal = document.querySelector("#gameModal");
const resetBtn = document.querySelector("#resetGame");
const winnerColor = document.querySelector("#gameColor")

let humanScore = 0;
let computerScore = 0;

// Text Variables
let tieRound = "It's a tie";
let humanWinRound = "You won this round!";
let computerWinRound = "You lost this round!";

let humanWinGame = "Well done! You won against the computer!";
let computerWinGame = "You lost! Better luck next time!";

// Play Game with max. 5 points
function playGame(event) {
    const humanSelection = event.target.id;
    console.log(humanSelection);
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
        roundColor.style.background = "#21bd69";
        putHumanScore.textContent = humanScore;
    } else if (winner === "computer") {
        computerScore++;
        roundResult.textContent = computerWinRound;
        roundColor.style.background = "#f53d5a";
        putComputerScore.textContent = computerScore;
    } else {
        roundResult.textContent = tieRound;
        roundColor.style.background = "#00bcd4";
    }
}

// Show Round Modal
function showRoundModal() {
    roundModal.classList.add("show-result");
    rpsButtons.forEach(rpsButton => {
        rpsButton.setAttribute("disabled", true);
    })
}

// Clear Round Modal
function clearRoundModal() {
    roundModal.classList.remove("show-result");
    rpsButtons.forEach(rpsButton => {
        rpsButton.removeAttribute("disabled");
    })
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
        winnerColor.style.background = "#f53d5a"
    }

    rpsButtons.forEach(rpsButton => {
        rpsButton.setAttribute("disabled", true);
    })
}

// Reset Game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    putHumanScore.textContent = humanScore;
    putComputerScore.textContent = computerScore;
    unflipChoice();
    rpsButtons.forEach(rpsButton => {
        rpsButton.removeAttribute("disabled");
    })
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