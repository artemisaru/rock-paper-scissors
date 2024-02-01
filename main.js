let items = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let i = Math.floor(Math.random() * items.length);
    return items[i];
}

function playRound(playerSelection, computerSelection) {
    let playerInput = prompt("Do you choose Rock, Paper or Scissors?");

    playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    round++;

    for (i = 0; i <= 3; i++) {
        if (playerSelection === items[i]) {
            if (playerSelection === computerSelection) {
                alert("You Tied! Try another round!")
            } else if (
                (playerSelection == "Rock" && computerSelection == "Paper") || 
                (playerSelection == "Paper" && computerSelection == "Scissors") || 
                (playerSelection == "Scissors" && computerSelection == "Rock")) {
                computerScore++;
                alert(`You lose! ${computerSelection} beats ${playerSelection}. Your score is ${userScore} - Computer's score is ${computerScore}`)
            } else {
                userScore++;
                alert(`You win! ${playerSelection} beats ${computerSelection}. Your score is ${userScore} - Computer's score is ${computerScore}`)
            }
        }
    }
}
 
function playGame() {
    
    for (let n = 0; n <= 5; n++) {
        console.log(getComputerChoice());
        n = round;
        if (n < 5) {
            playRound();
        } else if (n === 5) {
            if (userScore === computerScore) {
                alert("It's a tie! Try another round")
            } else if (userScore < computerScore) {
                alert("You lost! Better luck next time")
            } else if (userScore > computerScore) {
                alert(`You won!! You beat Computer by ${userScore} points!`)
            }
        }
    }
}

playGame();