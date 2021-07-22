function computerPlay() {
    let randomNumber = Math.floor(Math.random()*10);
    if(randomNumber >=0 && randomNumber <=3) {
        return ('rock') ;
    } else if (randomNumber >3 && randomNumber <=6) {
        return ('paper');
    } else {
        return ('scissors');
    }
}
let cSelect = computerPlay();
console.log(cSelect); //to see what computer selects
let pSelect = prompt('Enter your selection: ');

function gameStart(computerSelection , playerSelection) {
    if(computerSelection.toLowerCase() == playerSelection.toLowerCase()) {
        console.log('We have a DRAW people!!');
        return;
    }
    switch (playerSelection.toLowerCase()) {
        case 'rock' :
            if(computerSelection.toLowerCase() == 'paper') {
                console.log(`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else {
                console.log(`You WIN! ${playerSelection} beats ${computerSelection}`);
            } 
            break;

        case 'scissors' :
            if(computerSelection.toLowerCase() == 'rock') {
                console.log(`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else {
                console.log(`You WIN! ${playerSelection} beats ${computerSelection}`);
            }
            break;

        case 'paper' :
            if(computerSelection.toLowerCase() == 'scissors') {
                console.log(`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else {
                console.log(`You WIN! ${playerSelection} beats ${computerSelection}`);
            }
            break;
    }
}

gameStart(cSelect,pSelect);