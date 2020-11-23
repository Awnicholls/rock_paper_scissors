let computerScore = 0;
let playerScore = 0;
let round = 0;
function computerPlay () {
    const number = Math.floor(Math.random() * 3) + 1;
switch (number) {
    case 1:
      return  "rock";
        break;
    case 2:
       return  "scissors";
        break;
    default:
        return  "paper";
}
}
console.log(computerPlay)

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return `You Lose! Paper beats rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return `You Lose! Scissors beat paper. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return `You Win! Paper beats rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == "rock") {
        computerScore++;
        return `You Lose! Scissors beat rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`
    }
    else 
        return `That was a draw. Score: ${playerScore} to ${computerScore}`;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
