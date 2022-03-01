// Randomly Selects Computers Play
function computerPlay() {
  const rockPaperScissors = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors',
  };
  return rockPaperScissors[Math.floor(Math.random() * 3)];
}

// Prompts the user to make a pick
function playerPlay() {
  let selection = prompt('Rock, Paper, or Scissors?');
  selection = selection[0].toUpperCase() + selection.slice(1).toLowerCase();
  return selection;
}

// Calculates who wins a round
// Rock > Scissors
// Paper > Rock
// Scissors > Paper
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 'player';
  } else {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
    return 'computer';
  }
}
