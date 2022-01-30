


// Create a function to randomly return rock, paper, or scissors
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    let randomSelection = options[Math.floor(Math.random()*options.length)]
    return randomSelection
}


let computerScore = 0
let playerScore = 0

//Create a function to play one round
function oneRound(playerSelection, computerSelection) {
    //obtain user input
   // playerSelection = this.id
    
    computerSelection = computerPlay().toLowerCase()



    console.log("You chose " + playerSelection + ". The computer chose " + computerSelection + ".")
    //if user input is rock and computer is scissors say you win
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        console.log("You win. Rock beats Paper")
    }
        
    //if user input is rock and computer is paper say you lose
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore +=  1
        console.log("You Lose. Paper beats Rock.")
    }
    // tie
    else if (playerSelection === "rock" && computerSelection === "rock") {
        computerScore += 0
        console.log("Tie.")
    }
    //repeat for other scenarios
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win. Paper beats Rock.")
        playerScore += 1
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose. Scissors beats Paper")
        computerScore += 1
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie.")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win. Scissors beats Paper.")
        playerScore += 1
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose. Rock beats Scissors")
        computerScore += 1
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {

        console.log("Tie.")
    }
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', function () {oneRound(btn.id)});
    // oneRound(this.id));
});




//create a function for a 5 round game with a winner declared at the end
/*function game() {

    oneRound()
    console.log("Score: User " + playerScore + " Computer " + computerScore)
    oneRound()
    console.log("Score: User " + playerScore + " Computer " + computerScore)
    oneRound()
    console.log("Score: User " + playerScore + " Computer " + computerScore)
    oneRound()
    console.log("Score: User " + playerScore + " Computer " + computerScore)
    oneRound()
    console.log("Score: User " + playerScore + " Computer " + computerScore)

    if (computerScore > playerScore) {
        console.log("Game over. You lose.")
    }
    else if (computerScore < playerScore) {
        console.log("Game over. You win.")
    }
    else {
        console.log("Game over. Tie.")
    }
}
game() */