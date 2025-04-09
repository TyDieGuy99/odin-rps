console.log("Rock Paper Scissors!");
const buttons = document.querySelectorAll('button');
const max = 3; //all 3 rps options

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        const humanSelection = getHumanChoice(button.id);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

//run it
//playRound(humanSelection, computerSelection);

//functions go down here

//this converts random number 0-2 into rps option for cpu
function getComputerChoice() {

    let x = Math.floor(Math.random() * max);
    let computerChoice = 'none';

    if (x == 0) { 
        computerChoice = 'rock';
        console.log('com rock')
        return computerChoice;
    } else if (x == 1) {
        computerChoice = 'paper';
        console.log('com paper')
        return computerChoice;
    } else { 
        computerChoice = 'scissors';
        console.log('com scissors')
        return computerChoice;
    }
    
}

//use prompt to get player input
function getHumanChoice(buttonChoice) {
    let playerChoice = buttonChoice;
    if (playerChoice.toLowerCase() === 'rock') {
        console.log('player rock')
        return playerChoice
    } else if (playerChoice.toLowerCase() === 'paper') {
        console.log('player paper')
        return playerChoice
    } else if (playerChoice.toLowerCase() === 'scissors') {
        console.log('player scissors')
        return playerChoice
    } else {
        return null //if player doesn't type any of the 3 options
    }
     
}

//play rps round
function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    //if player picks rock
     
    if (humanChoice == 'rock' && computerChoice == 'scissors') { //win condition
        humanScore++;
        console.log("Rock beats Scissors! You Win!!!");

    } else if (humanChoice == 'rock' && computerChoice == 'paper') { //lose condition
        computerScore++;
        console.log("Paper beats Rock! You Lose!!!");

        //if player picks paper
        
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') { //lose condition
        computerScore++;
        console.log("Scissors beats Paper! You Lose!!!");
    } else if (humanChoice == 'paper' && computerChoice == 'rock') { //win condition
        humanScore++;
        console.log("Paper beats Rock! You Win!!!");

        //if player picks scissors

    } else if (humanChoice == 'scissors' && computerChoice == 'rock') { //lose condition
        computerScore++;
        console.log("Rock beats Scissors! you Lose!!!");
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') { //win condition
        humanScore++;
        console.log("Scissors beats Paper! You Win!!!");

    } else { //player and cpu pick same
        console.log("Draw!");
    }

    console.log(humanScore);
    console.log(computerScore);
}

//play full game of rps
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You Win!! Score: " + humanScore + ":" + computerScore)
    } else if (humanScore < computerScore) {
        console.log("You Lose!! Score: " + humanScore + ":" + computerScore)
    } else {
        console.log("The match is a draw!")
    }
}

