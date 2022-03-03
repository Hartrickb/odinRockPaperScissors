// Keeps track of score
let scores = {
  player: 0,
  computer: 0,
  tie: 0,
};

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
    outcomeDiv.style.backgroundColor = '#70C1B3';
    outcomeDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 'player';
  } else if (playerSelection === computerSelection) {
    outcomeDiv.style.backgroundColor = 'lightgrey';
    outcomeDiv.textContent = 'You tied. Try again.';
    return 'tie';
  } else {
    outcomeDiv.style.backgroundColor = 'lightcoral';
    outcomeDiv.textContent = `You lose. ${computerSelection} beats ${playerSelection}`;
    return 'computer';
  }
}

const buttons = document.querySelectorAll('.playGame');
const scoreboard = document.querySelector('.scoreboard');

// Enables game play and updates score
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const winner = playRound(button.id, computerPlay());
    scores[winner] = scores[winner] + 1;
    scoreboard.textContent = `Player: ${scores['player']} Computer: ${scores['computer']}`;
  });
});
