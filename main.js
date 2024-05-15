// General Variables
const choices = ["rock", "paper", "scissors"];
const rpsButtons = document.querySelectorAll(".choice");

let putRound = document.querySelector(".round");
let putHumanScore = document.querySelector(".human-score");
let putComputerScore = document.querySelector(".computer-score");

const humanSelectionImg = document.querySelector("#humanSelection");
const computerSelectionImg = document.querySelector("#computerSelection");

const roundResult = document.querySelector("#roundResult");
const roundModal = document.querySelector(".modal");
let closeRoundModal = document.querySelector(".close-modal");

let round = 1;
let humanScore = 0;
let computerScore = 0;

// Text Variables
let tieRound = "It's a tie";
let humanWinRound = "You won this round!";
let computerWinRound = "You lost this round!";

let tieGame = "It's a tie! Try another game!";
let humanWinGame = "Well done!! You won against the computer!";
let computerWinGame = "You lost...The computer has defeated you.";

// Play Game
function playGame(event) {
    round++;
    putRound.textContent = round;
    const humanSelection = event.target.id;
    console.log(humanSelection);
    const computerSelection = getComputerChoice();
    humanSelectionImg.src = `./images/${humanSelection}.png`;
    computerSelectionImg.src = `./images/${computerSelection}.png`;
    const winner = getRoundWinner(humanSelection, computerSelection);
    showRoundWinner(winner);
    showRoundModal();
}

// Randomly generate computer's choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

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
    roundModal.style.display = "block";
}

// Clear Modal
function clearModalBtn() {
    roundModal.style.display = "none";
}

function clearModalWindow(e) {
    if (e.target === roundModal) {
        roundModal.style.display = "none";
    }
}

//const humanSelection = getHumanChoice().toLowerCase();
//const computerSelection = getComputerChoice().toLowerCase();

// Play game = 5 rounds
/*
function playGame() {
    let gameResult = "";
    for (let n = 0; n <= 5; n++) {
        n = round;
        if (humanScore === computerScore) {
            gameResult = "It's a tie! Try another game.";
        } else if (humanScore < computerScore) {
            gameResult = `You lost! Better luck next time! Your score ${humanScore} - Computer's score ${computerScore}`;
        } else {
            gameResult = `You won!! Your score ${humanScore} - Computer's score ${computerScore}`;
        }

        if (n === 5) {
            console.log(gameResult);
        } else {
            playRound();
        }
    }
}

playGame(); */

// Event Listeners
rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener("click", (event) => {playGame(event)})
});

closeRoundModal.addEventListener("click", () => {clearModalBtn()});
window.addEventListener("click", (e) => {clearModalWindow(e)});