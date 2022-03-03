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
  const outcomeDiv = document.querySelector('#outcome');
  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    outcomeDiv.style.backgroundColor = 'green';
    outcomeDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 'player';
  } else if (playerSelection === computerSelection) {
    console.log('You tied. Try again.');
    outcomeDiv.style.backgroundColor = 'gray';
    outcomeDiv.textContent = 'You tied. Try again.';
    return 'tie';
  } else {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
    outcomeDiv.style.backgroundColor = 'red';
    outcomeDiv.textContent = `You lose. ${computerSelection} beats ${playerSelection}`;
    return 'computer';
  }
}

// Plays five rounds and prints an overall winner
function game() {
  // let gameWinner = { player: 0, computer: 0 };
  // for (let i = 0; i < 5; i++) {
  //   const computerSelection = computerPlay();
  //   const playerSelection = playerPlay();
  //   const winner = playRound(playerSelection, computerSelection);
  //   gameWinner[winner] = gameWinner[winner] + 1;
  // }
  // console.log(gameWinner);
}

const buttons = document.querySelectorAll('.playGame');
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    playRound(button.id, computerPlay());
  });
});
