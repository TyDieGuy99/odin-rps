console.log("Hello World");
const max = 3;

console.log(getComputerChoice());

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


