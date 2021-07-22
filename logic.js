function computerPlay() {
    let randomNumber = Math.floor(Math.random()*10);
    if(randomNumber >=0 && randomNumber <=3) {
        return ('rock') ;
    } else if (randomNumber >3 && randomNumber <=6) {
        return ('paper');
    } else {
        return ('scisssors');
    }
}
console.log(computerPlay());