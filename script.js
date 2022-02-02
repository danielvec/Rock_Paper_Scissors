
// Create a function to randomly return rock, paper, or scissors
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    let randomSelection = options[Math.floor(Math.random()*options.length)]
    return randomSelection
}

let computerScore = 0
let playerScore = 0

const results = document.querySelector(".results");
const choice = document.querySelector(".choice");
const endGame = document.querySelector(".endGame");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function () {oneRound('rock')});
paper.addEventListener('click', function () {oneRound('paper')});
scissors.addEventListener('click', function () {oneRound('scissors')});

const cScore = document.querySelector("#computerScore");
const pScore = document.querySelector("#playerScore");
const final = document.querySelector("#finalResult")
const playAgain =document.createElement('button')
playAgain.textContent = "Play again!"
playAgain.addEventListener('click', function () {location.reload()});

//Create a function to play one round of rock paper scissors
function oneRound(playerSelection) {

    computerSelection = computerPlay().toLowerCase();

    choice.textContent = "You chose " + playerSelection + ". The computer chose " + computerSelection + ".";

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        results.textContent = "You win. Rock beats Scissors";
        pScore.textContent = "User Score: " + playerScore;
        if (playerScore === 5 || computerScore === 5) {
            final.textContent = "Game Over. You win.";
            gameOver();
        }
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore +=  1
        results.textContent = "You Lose. Paper beats Rock."
        cScore.textContent = "Computer Score: " + computerScore;
        if (playerScore === 5 || computerScore === 5) {
            final.textContent = "Game Over. You lose.";
            gameOver();
        }
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        computerScore += 0
        results.textContent = "Tie."
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You win. Paper beats Rock."
        playerScore += 1
        pScore.textContent = "User Score: " + playerScore;
        if (playerScore === 5 || computerScore === 5) {
            final.textContent = "Game Over. You win.";
            gameOver();
        }
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You Lose. Scissors beats Paper"
        computerScore += 1
        cScore.textContent = "Computer Score: " + computerScore;
        if (playerScore === 5 || computerScore === 5) {
            final.textContent = "Game Over. You lose.";
            gameOver();
        }
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        results.textContent = "Tie."

    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You win. Scissors beats Paper."
        playerScore += 1
        pScore.textContent = "User Score: " + playerScore;
        if (playerScore === 5 || computerScore === 5) {
            final.textContent = "Game Over. You win.";
            gameOver();
        }
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = "You Lose. Rock beats Scissors"
        computerScore += 1
        cScore.textContent = "Computer Score: " + computerScore;
        if (playerScore === 5 || computerScore === 5) {
            final.textContent = "Game Over. You lose.";
            gameOver();
        }
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {

        results.textContent = "Tie."
    }
}
//Create a function to end the game by disabling the game buttons
function gameOver() {
    endGame.appendChild(playAgain);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}


