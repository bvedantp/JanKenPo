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

function playRound(computerSelection , playerSelection) {
    if(!computerSelection || !playerSelection) return;
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
                pCount++; //is this changing global value permanently or within function scope??
                return (`You WIN! ${playerSelection} beats ${computerSelection}`);
            } 
            break;
    }
}


//problem was e.target ko event listener se lena tha or playround ko dena tha which can be done
//by passing the function playround itself into event listener and not phle e.target.id pass kro then
//think of how to pass that into playround.
//while(pCount<=5 || cCount<=5){
window.addEventListener('click', (e) => {
    let computer= computerPlay();
    //let para= document.createElement("p");
    let para= document.getElementById("result");
    console.log(e.target.id);
     playRound(computer, e.target.id);
    //result.appendChild(para);
    para.innerHTML= `Current score is P: ${pCount}   C: ${cCount}`;
    if(pCount==5) {
        para.innerHTML='You win man, you win';
        cCount=0;
        pCount=0;
    } else if (cCount==5){
        para.innerHTML='I win bro 8) - Computer';
        cCount=0;
        pCount=0;
    }
});


/*
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

game(); */