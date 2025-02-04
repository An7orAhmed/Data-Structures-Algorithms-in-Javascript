
function solveSudoku(board) {
    const find = findEmptyCell(board);
    if (!find) return true; // সুডোকু সম্পন্ন হয়েছে

    const row = find[0];
    const col = find[1];

    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = 0; // backtrack
        }
    }
    return false; // কোনো সমাধান নেই
}

function findEmptyCell(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                return [i, j]; // খালি কোষ পাওয়া গেছে
            }
        }
    }
    return null; // কোনো খালি কোষ নেই
}

function isValid(board, row, col, num) {
    // একই সারিতে নম্বর আছে কিনা তা পরিক্ষা করা
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num && i !== col) return false;
    }

    // একই কলামে নম্বর আছে কিনা তা পরিক্ষা করা
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num && i !== row) return false;
    }

    // একই 3x3 সাব-গ্রিডে নম্বর আছে কিনা তা পরিক্ষা করা
    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] === num) return false;
        }
    }

    return true; // নম্বর রাখা বৈধ
}

function printBoard(board) {
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0 && i !== 0) console.log("- - - - - - - - - - -");
        let row = "";
        for (let j = 0; j < 9; j++) {
            if (j % 3 === 0 && j !== 0) row += "| ";
            if (j === 8) row += board[i][j];
            else row += board[i][j] + " ";
        }
        console.log(row);
    }
}
