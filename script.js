


// Create a function to randomly return rock, paper, or scissors
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    let randomSelection = options[Math.floor(Math.random()*options.length)]
    return randomSelection
}

computerPlay()

//Create a function to play one round
function oneRound(playerSelection, computerSelection) {
    //obtain user input
        playerSelection = prompt("Type Rock, Paper,or Scissors").toLowerCase()
    
        computerSelection = computerPlay().toLowerCase()

        console.log(playerSelection, computerSelection)
    //if user input is rock and computer is scissors say you win
        if (playerSelection === "rock" && computerSelection === "scissors")
            console.log("You win.")
    //if user input is rock and computer is paper say you lose
        if (playerSelection === "rock" && computerSelection === "paper")
            console.log("You Lose.")
    // tie
    if (playerSelection === "rock" && computerSelection === "rock")
        console.log("Tie.")
    //repeat for other scenarios
    if (playerSelection === "paper" && computerSelection === "rock")
        console.log("You win.")
    if (playerSelection === "paper" && computerSelection === "scissors")
        console.log("You Lose.")
    if (playerSelection === "paper" && computerSelection === "paper")
        console.log("Tie.")
    if (playerSelection === "scissors" && computerSelection === "paper")
        console.log("You win.")
    if (playerSelection === "scissors" && computerSelection === "rock")
        console.log("You Lose.")
    if (playerSelection === "scissors" && computerSelection === "scissors")
        console.log("Tie.")
}
oneRound()