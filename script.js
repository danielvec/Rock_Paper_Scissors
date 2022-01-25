


// Create a function to randomly return rock, paper, or scissors
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    let randomSelection = options[Math.floor(Math.random()*options.length)]
    return randomSelection
}

computerPlay()

let computerScore = 0
let playerScore = 0

//Create a function to play one round
function oneRound(playerSelection, computerSelection) {
    //obtain user input
    playerSelection = prompt("Type Rock, Paper,or Scissors").toLowerCase()
    
    computerSelection = computerPlay().toLowerCase()



    console.log(playerSelection, computerSelection)
    //if user input is rock and computer is scissors say you win
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        console.log("You win.")
    }
        
    //if user input is rock and computer is paper say you lose
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore +=  1
        console.log("You Lose.")
    }
    // tie
    else if (playerSelection === "rock" && computerSelection === "rock") {
        computerScore += 0
        console.log("Tie.")
    }
    //repeat for other scenarios
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win.")
        playerScore += 1
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose.")
        computerScore += 1
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie.")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win.")
        playerScore += 1
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose.")
        computerScore += 1
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {

        console.log("Tie.")
    }
}

//create a function for a 5 round game with a winner declared at the end
function game() {

    oneRound()
    oneRound()
    oneRound()
    oneRound()
    oneRound()
    if (computerScore > playerScore) {
        console.log("You lose.")
    }
    else if (computerScore < playerScore) {
        console.log("You win.")
    }
    else {
        console.log("Tie.")
    }
}
game()