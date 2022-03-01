function computerPlay() {
  const rockPaperScissors = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors',
  };
  return rockPaperScissors[Math.floor(Math.random() * 3)];
}
