let computerScore = 0;
let playerScore = 0;
let round = 0;
var computerPlay = Math.floor(Math.random() * 3) + 1;
switch (computerPlay) {
    case 1:
        computerPlay = "rock";
        break;
    case 2:
        computerPlay = "scissorcs";
        break;
    default:
        computerPlay = "paper";
}
console.log(computerPlay)