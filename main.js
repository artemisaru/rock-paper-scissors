const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;
// Randomly generate computer's choice
//function getComputerChoice() {
//    let i = Math.floor(Math.random() * choices.length);
//    return choices[i];
//};

// Get human's choice
//function getHumanChoice() {
//    let input = prompt("Do you choose Rock, Paper or Scissors?");
//    return input;
//}

// Play one round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("You tied! Try another round!")
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        console.log(`You lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()}. Your score is ${humanScore} - Computer's score is ${computerScore}`)
    } else {
        humanScore++;
        console.log(`You won this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()}. Your score is ${humanScore} - Computer's score is ${computerScore}`)
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

const rpsButtons = document.querySelector("#rpsButtons");

rpsButtons.addEventListener("click", function (e) {
    const playerSelection = e.target.textContent.toLowerCase();
    
    let i = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[i].toLowerCase();
    
    playRound(playerSelection, computerSelection);

    const playerImg = document.querySelector("#humanSelection");

    switch(playerSelection) {
        case "rock" :
            playerImg.src = "./images/rock.png";
            break;
        case "paper" :
            playerImg.src = "./images/paper.png";
            break;
        case "scissors" :
            playerImg.src = "./images/scissors.png";
            break;
    }

    const computerImg = document.querySelector("#computerSelection");

    switch(computerSelection) {
        case "rock" :
            computerImg.src = "./images/rock.png";
            break;
        case "paper" :
            computerImg.src = "./images/paper.png";
            break;
        case "scissors" :
            computerImg.src = "./images/scissors.png";
            break;
    }
});
