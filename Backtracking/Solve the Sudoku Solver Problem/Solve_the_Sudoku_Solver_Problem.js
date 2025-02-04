function findEmptyCell(board) {
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            if(board[row][col] === 0) {
                return { row, col };
            }
        }
    }
    return null;
}

function isValid(board, row, col, num) {
    // Check row
    for(let x = 0; x < 9; x++) {
        if(board[row][x] === num) {
            return false;
        }
    }

    // Check column
    for(let x = 0; x < 9; x++) {
        if(board[x][col] === num) {
            return false;
        }
    }

    // Check sub-grid
    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }
    return true;
}

function solveSudoku(board) {
    const emptyCell = findEmptyCell(board);
    if(!emptyCell) {
        return true;
    }

    const { row, col } = emptyCell;

    for(let num = 1; num <= 9; num++) {
        if(isValid(board, row, col, num)) {
            board[row][col] = num;
            if(solveSudoku(board)) {
                return true;
            }
            board[row][col] = 0;
        }
    }
    return false;
}

// Example usage:
const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

if(solveSudoku(sudokuBoard)) {
    console.log("Solved Sudoku:");
    console.log(sudokuBoard);
} else {
    console.log("No solution exists");
}