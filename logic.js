function computerPlay() {
    let randomNumber = Math.floor(Math.random()*10);
    if(randomNumber >=0 && randomNumber <=3) {
        return 'rock' ;
    } else if (randomNumber >3 && randomNumber <=6) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
//let cSelect = computerPlay();
//console.log(cSelect); //to see what computer selects
//let pSelect = prompt('Enter your selection: ');
let cCount=0;
let pCount=0;

function gameStart(computerSelection , playerSelection) {
    if(computerSelection.toLowerCase() == playerSelection.toLowerCase()) { //to make it case insensitive by converting to lower case
        return ('We have a DRAW people!!');
    }

    switch (playerSelection.toLowerCase()) {
        case 'rock' :
            if(computerSelection.toLowerCase() == 'paper') {
                cCount++;
                return (`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else {
                pCount++;
                return (`You WIN! ${playerSelection} beats ${computerSelection}`);
            } 
            break;

        case 'scissors' :
            if(computerSelection.toLowerCase() == 'rock') {
                cCount++;
                return (`You LOSE! ${computerSelection} beats ${playerSelection}`);
                
            } else {
                pCount++;
                return (`You WIN! ${playerSelection} beats ${computerSelection}`);
            }
            break;

        case 'paper' :
            if(computerSelection.toLowerCase() == 'scissors') {
                cCount++;
                return (`You LOSE! ${computerSelection} beats ${playerSelection}`);
            } else {
                pCount++; //is this changing global value permanently or withoin function scope??
                return (`You WIN! ${playerSelection} beats ${computerSelection}`);
            }
            break;
    }
}

//console.log(gameStart(cSelect,pSelect));

function game() {
    for( let i=0;i<5;i++) {
        let player= prompt('Enter your selectionn: ');
        let computer= computerPlay();
        console.log(gameStart(computer, player));
        console.log(`Current score is P: ${pCount}   C: ${cCount}`);
    }
    if(pCount==cCount) {
        console.log(`Don't u wanna play another Round looking at the scoreboard.`);
        return;
    }
    if(pCount>cCount) {
        console.log('You win man, you win');
    } else {
        console.log('Fuck u!! - Computer');
    }
}

game();