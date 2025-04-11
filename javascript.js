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

const info = document.querySelector('#info');

const pChoice = document.createElement('p');
pChoice.classList.add('pChoice');
pChoice.textContent = 'Player: NONE';
info.appendChild(pChoice);

const cChoice = document.createElement('p');
cChoice.classList.add('cChoice');
cChoice.textContent = 'CPU: NONE';
info.appendChild(cChoice);

const totalScore = document.createElement('p');
totalScore.classList.add('totalScore');
totalScore.textContent = humanScore + '-' + computerScore;
info.appendChild(totalScore);

const roundResult = document.createElement('p');
roundResult.classList.add('roundResult');
roundResult.textContent = '';
info.appendChild(roundResult);

const winner = document.createElement('p');
winner.classList.add('winner');
winner.textContent = '';
info.appendChild(winner);



//run it
//playRound(humanSelection, computerSelection);

//functions go down here

//this converts random number 0-2 into rps option for cpu
function getComputerChoice() {

    let x = Math.floor(Math.random() * max);
    let computerChoice = 'none';

    if (x == 0) { 
        computerChoice = 'rock';
        console.log('com rock');
        cChoice.textContent = 'CPU: ROCK';
        return computerChoice;
    } else if (x == 1) {
        computerChoice = 'paper';
        console.log('com paper');
        cChoice.textContent = 'CPU: PAPER';
        return computerChoice;
    } else { 
        computerChoice = 'scissors';
        console.log('com scissors');
        cChoice.textContent = 'CPU: SCISSORS';
        return computerChoice;
    }
    
}

//use prompt to get player input
function getHumanChoice(buttonChoice) {
    let playerChoice = buttonChoice;
    if (playerChoice.toLowerCase() === 'rock') {
        console.log('player rock');
        pChoice.textContent = 'Player: ROCK';
        return playerChoice;
    } else if (playerChoice.toLowerCase() === 'paper') {
        console.log('player paper');
        pChoice.textContent = 'Player: PAPER';
        return playerChoice;
    } else if (playerChoice.toLowerCase() === 'scissors') {
        console.log('player scissors');
        pChoice.textContent = 'Player: SCISSORS';
        return playerChoice;
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
        totalScore.textContent = humanScore + '-' + computerScore;
        roundResult.textContent = 'Rock beats Scissors! You Win!!!';
        console.log("Rock beats Scissors! You Win!!!");
        checkWinner();

    } else if (humanChoice == 'rock' && computerChoice == 'paper') { //lose condition
        computerScore++;
        totalScore.textContent = humanScore + '-' + computerScore;
        roundResult.textContent = 'Paper beats Rock! You Lose!!!';
        console.log("Paper beats Rock! You Lose!!!");
        checkWinner();
        //if player picks paper
        
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') { //lose condition
        computerScore++;
        totalScore.textContent = humanScore + '-' + computerScore;
        roundResult.textContent = 'Scissors beats Paper! You Lose!!!';
        console.log("Scissors beats Paper! You Lose!!!");
        checkWinner();
        
    } else if (humanChoice == 'paper' && computerChoice == 'rock') { //win condition
        humanScore++;
        totalScore.textContent = humanScore + '-' + computerScore;
        roundResult.textContent = 'Paper beats Rock! You Win!!!';
        console.log("Paper beats Rock! You Win!!!");
        checkWinner();
        //if player picks scissors

    } else if (humanChoice == 'scissors' && computerChoice == 'rock') { //lose condition
        computerScore++;
        totalScore.textContent = humanScore + '-' + computerScore;
        roundResult.textContent = 'Rock beats Scissors! you Lose!!!';
        console.log("Rock beats Scissors! you Lose!!!");
        checkWinner();

    } else if (humanChoice == 'scissors' && computerChoice == 'paper') { //win condition
        humanScore++;
        totalScore.textContent = humanScore + '-' + computerScore;
        roundResult.textContent = 'Scissors beats Paper! You Win!!!';
        console.log("Scissors beats Paper! You Win!!!");
        checkWinner();

    } else { //player and cpu pick same
        roundResult.textContent = 'Draw!';
        console.log("Draw!");
    }

    console.log(humanScore);
    console.log(computerScore);
}

//play full game of rps
function checkWinner() {
    if ((humanScore == 5) || (computerScore == 5)) {
        if (humanScore > computerScore) {
            console.log("You Win!! Score: " + humanScore + ":" + computerScore)
            winner.textContent = 'You won the game!';
        } else if (humanScore < computerScore) {
            console.log("You Lose!! Score: " + humanScore + ":" + computerScore)
            winner.textContent = 'You lost the game!';
        } else {
            console.log("The match is a draw!")
        }
    }
}

