let computerScore = 0;
let playerScore = 0;
let round = 0;
function computerPlay = Math.floor(Math.random() * 3) + 1;
switch (computerPlay) {
    case 1:
        computerPlay = "rock";
        break;
    case 2:
        computerPlay = "scissors";
        break;
    default:
        computerPlay = "paper";
}
console.log(computerPlay)

function playRound (computerSelection, playerSelection) {
    case (computerSelection == "rock" && playerSelection == "paper"):
    case (computerSelection == "paper" && playerSelection == "scissors"):
    case (computerSelection == "scissors" && playerSelection == "rock"):
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} to ${computerScore}`;
        break;
    case (computerSelection == "rock" && playerSelection == "scissors"):
    case (computerSelection == "paper" && playerSelection == "rock"):
    case (computerSelection == "scissors" && playerSelection == "paper"):
        computerScore++;
        return `You Lose! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} to ${computerScore}`;
        break;
    default:
        `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;    
}
