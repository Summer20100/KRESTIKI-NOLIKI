let players = ['x', 'o'];
let activePlayer = 0;

let counter = 0;

function startGame() {
  field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  renderBoard(field);
};

function click(row, col) {
  if (counter % 2 === 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  };
  field[row][col] = players[activePlayer];
  counter++;
  renderBoard(field);
  checkWin();
};

function checkWin() {
  let winner = players[activePlayer];
  let row = field.length;
  let col = field.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (field[i][0] === winner && field[i][1] === winner && field[i][2] === winner) {
        showWinner(activePlayer);
      } else if (field[0][j] === winner && field[1][j] === winner && field[2][j] === winner) {
        showWinner(activePlayer);
      } else if (field[0][0] === winner && field[1][1] === winner && field[2][2] === winner) {
        showWinner(activePlayer);
      } else if (field[0][2] === winner && field[1][1] === winner && field[2][0] === winner) {
        showWinner(activePlayer);
      }       
    }
  }
};