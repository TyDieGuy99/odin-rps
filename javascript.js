//variables
const max = 3; //all 3 rps options
let pNameInput = prompt('What\'s your name?');
let pName = pNameInput.substring(0, 12);
let cNameInput = prompt('What\'s your opponent\'s name?');
let cName = cNameInput.substring(0, 12);
let rounds = prompt('How many rounds would you like to play?(Must be at least 3, no more than 25, an odd number)');
var regex = /^[0-9]+$/;
let humanScore = 0;
let computerScore = 0;

//if player doesn't input names or cancel use default
if ((pName == null) || (pName == '')){
    pName = 'Player';
}

if ((cName == null) || (cName == '')){
    cName = 'CPU';
}
if ((rounds < 3) || (rounds > 25) || (!rounds.match(regex)) || (rounds % 2 == 0)) {
    rounds = 5;
}

console.log(Number(rounds));

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = getHumanChoice(button.id);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

//parent elements
const info = document.querySelector('#info');
const score = document.querySelector('#score');
const title = document.querySelector('#header');

//content elements to be changed when needed
const header2 = document.createElement('h2');
header2.classList.add('header2');
header2.textContent = 'First one to reach a score of ' + rounds + ' wins!';
title.appendChild(header2);

const pChoice = document.createElement('p');
pChoice.classList.add('pChoice');
pChoice.textContent = pName + ':';
pChoice.style.paddingRight = '15px'
info.appendChild(pChoice);

const cChoice = document.createElement('p');
cChoice.classList.add('cChoice');
cChoice.textContent = cName + ':'
cChoice.style.paddingLeft = '15px'
info.appendChild(cChoice);

const totalScore = document.createElement('p');
totalScore.classList.add('totalScore');
totalScore.textContent = humanScore + ' : ' + computerScore;
totalScore.style.fontSize = '32px';
score.appendChild(totalScore);

const roundResult = document.createElement('p');
roundResult.classList.add('roundResult');
roundResult.textContent = '';
score.appendChild(roundResult);

const winner = document.createElement('p');
winner.classList.add('winner');
winner.textContent = '';
winner.style.fontSize = '64px';
score.appendChild(winner);

//functions go down here

function getPlayerName() {
    
}

//this converts random number 0-2 into rps option for cpu
function getComputerChoice() {
    let x = Math.floor(Math.random() * max);
    let computerChoice = 'none';

    if (x == 0) { 
        computerChoice = 'rock';
        cChoice.textContent = cName + ': Rock';
        return computerChoice;
    } else if (x == 1) {
        computerChoice = 'paper';
        cChoice.textContent = cName + ': Paper';
        return computerChoice;
    } else { 
        computerChoice = 'scissors';
        cChoice.textContent = cName + ': Scissors';
        return computerChoice;
    }
}

//use prompt to get player input
function getHumanChoice(buttonChoice) {
    let playerChoice = buttonChoice;

    if (playerChoice.toLowerCase() === 'rock') {
        pChoice.textContent = pName + ': Rock';
        return playerChoice;
    } else if (playerChoice.toLowerCase() === 'paper') {
        pChoice.textContent = pName + ': Paper';
        return playerChoice;
    } else if (playerChoice.toLowerCase() === 'scissors') {
        pChoice.textContent = pName + ': Scissors';
        return playerChoice;
    }
     
}

//play rps round
function playRound(humanChoice, computerChoice) {
    //if player picks rock
     
    if (humanChoice == 'rock' && computerChoice == 'scissors') { //win condition
        humanScore++;
        totalScore.textContent = humanScore + ' : ' + computerScore;
        roundResult.textContent = 'Rock beats Scissors! You Win!!!';

    } else if (humanChoice == 'rock' && computerChoice == 'paper') { //lose condition
        computerScore++;
        totalScore.textContent = humanScore + ' : ' + computerScore;
        roundResult.textContent = 'Paper beats Rock! You Lose!!!';

        //if player picks paper
        
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') { //lose condition
        computerScore++;
        totalScore.textContent = humanScore + ' : ' + computerScore;
        roundResult.textContent = 'Scissors beats Paper! You Lose!!!';
        
    } else if (humanChoice == 'paper' && computerChoice == 'rock') { //win condition
        humanScore++;
        totalScore.textContent = humanScore + ' : ' + computerScore;
        roundResult.textContent = 'Paper beats Rock! You Win!!!';

        //if player picks scissors

    } else if (humanChoice == 'scissors' && computerChoice == 'rock') { //lose condition
        computerScore++;
        totalScore.textContent = humanScore + ' : ' + computerScore;
        roundResult.textContent = 'Rock beats Scissors! you Lose!!!';

    } else if (humanChoice == 'scissors' && computerChoice == 'paper') { //win condition
        humanScore++;
        totalScore.textContent = humanScore + ' : ' + computerScore;
        roundResult.textContent = 'Scissors beats Paper! You Win!!!';
        

    } else { //player and cpu pick same
        roundResult.textContent = 'Draw!';
    }
        checkWinner();
}

//play full game of rps
function checkWinner() {
    
    if ((humanScore == rounds) || (computerScore == rounds)) {
        if (humanScore > computerScore) {
            if (computerScore != 0) {
                winner.textContent = 'You won the game!';
            } else {
                winner.textContent = 'You\'re a rock paper scissors masters!!!';
            }
            
        } else if (humanScore < computerScore) {
            if (humanScore != 0 ) {
                winner.textContent = 'You lost the game!';
            } else {
                winner.textContent = 'Yikes!!...'
            }
            
        }
        //prompt player if they wish to play again - if yes reset everything to 0, if no disable buttons
        setTimeout(function() { //delay the confirm to allow brower to update results properly
            if (confirm('Play again??')) {
                humanScore = 0;
                computerScore = 0;
                roundResult.textContent = '';
                winner.textContent = '';
                cChoice.textContent = cName + ':';
                pChoice.textContent = pName + ':';
                totalScore.textContent = humanScore + ' : ' + computerScore;
            } else {
                buttons.forEach((button) => {
                    button.disabled = true;
                    button.disabled.cursor = 'not-allowed';
                });
            }
        }, 1);
        
    }
    
}