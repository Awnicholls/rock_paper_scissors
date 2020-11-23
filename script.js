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
        return `That was a draw. You both played ${playerSelection}. Score: ${playerScore} to ${computerScore}`;
}

function game() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt ("Choose one: Rock, Paper or Scissors").toLocaleLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations, you're the winner! The final Score was ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Unlucky, you have lost. The final Score was ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. The final Score was ${playerScore} to ${computerScore}`);
}

game()