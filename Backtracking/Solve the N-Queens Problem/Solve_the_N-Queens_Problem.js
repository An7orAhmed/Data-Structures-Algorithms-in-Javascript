function solveNQueens(n) {
  const board = Array(n).fill(-1);
  const solutions = [];

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i] === col || 
          board[i] - i === col - row || 
          board[i] + i === col + row) {
        return false;
      }
    }
    return true;
  }

  function placeQueen(row) {
    if (row === n) {
      solutions.push([...board]);
      return true;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = col;
        if (placeQueen(row + 1)) {
          return true;
        }
        board[row] = -1;
      }
    }
    return false;
  }

  placeQueen(0);
  return solutions.length ? solutions[0] : null;
}