console.log("Hello World");

const max = 3; //all 3 rps options

console.log(getComputerChoice());
getHumanChoice();

//this converts random number 0-2 into rps option
function getComputerChoice() {

    let x = Math.floor(Math.random() * max);
    let computerChoice = 'none';

    if (x == 0) { 
        computerChoice = 'Rock';
    } else if (x == 1) {
        computerChoice = 'Paper';
    } else { 
        computerChoice= 'Scissors';
    }
    return computerChoice;
}

function getHumanChoice() {
    let playerChoice = prompt('Rock, Paper, Scissors', 'Choose an option..'); //ask for player input
    //use .toLowerCase() to account for if player capitalizes any letter in their input
    if (playerChoice.toLowerCase() === 'rock') {
        return console.log('I Choose Rock')
    } else if (playerChoice.toLowerCase() === 'paper') {
        return console.log('I Choose Paper')
    } else if (playerChoice.toLowerCase() === 'scissors') {
        return console.log('I Choose Scissors')
    } else {
        return null; //if player doesn't type any of the 3 options
    }
        
}

