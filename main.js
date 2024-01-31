let items = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let i = Math.floor(Math.random() * items.length);
    return items[i];
}

console.log(getComputerChoice());

// R-R  P-P  S-S  -- tie
// R-P  P-S  S-R  -- lost
// R-S  P-R  S-P  -- won

function playRound(playerSelection, computerSelection) {
    let playerInput = prompt("Do you choose Rock, Paper or Scissors?");

    playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    computerSelection = getComputerChoice();

    for (i = 0; i <= 3; i++) {
        if (playerSelection === items[i]) {
            if (playerSelection === computerSelection) {
                return "You Tied! Try another round!"
            } else if (
                (playerSelection == "Rock" && computerSelection == "Paper") || 
                (playerSelection == "Paper" && computerSelection == "Scissors") || 
                (playerSelection == "Scissors" && computerSelection == "Rock")) {
                return `You lose! ${computerSelection} beats ${playerSelection}`
                computerScore++;
            } else {
                return `You win! ${playerSelection} beats ${computerSelection}`
                userScore++;
            }
        } else {

        }
    }
}

// game has 5 rounds => n <= 5
// each round wins a point
// add the points out
// winner is

// win -- +1  lose -- 0  tie -- 0
 
function playGame() {
    for (let n = 0; n <= 5; n++) {
        playRound();
    }
}

console.log(playGame());