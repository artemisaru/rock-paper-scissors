let items = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let i = Math.floor(Math.random() * items.length);
    return items[i];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();
    round++;

    for (let item of items) {
        if (items[0].toLowerCase() === playerSelection.toLowerCase()) {
            if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
                alert("You Tied! Try another round!")
            } else if (
                (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") ||
                (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") ||
                (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")) {
                computerScore++;
                alert(`You lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}. Your score is ${userScore} - Computer's score is ${computerScore}`)
            } else {
                userScore++;
                alert(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}. Your score is ${userScore} - Computer's score is ${computerScore}`)
            }
            break; 
        }
    }

    if (items[0].toLowerCase() !== playerSelection.toLowerCase()) {
        round--;
        alert("Please choose between Rock, Paper or Scissors")
        playRound();
    }
}
 
function playGame() {
    
    for (let n = 0; n <= 5; n++) {
        console.log(getComputerChoice());
        n = round;
        if (n === 5) {
            if (userScore === computerScore) {
                alert("It's a tie! Try another round")
            } else if (userScore < computerScore) {
                alert("You lost! Better luck next time")
            } else if (userScore > computerScore) {
                alert(`You won!! You beat Computer by ${userScore} points!`)
            }
        } else {
            playRound();
        }
    }
}

playGame();