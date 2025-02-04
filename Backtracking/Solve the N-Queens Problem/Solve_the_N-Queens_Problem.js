
function isSafe(queens, row, col, n) {
    for(let i = 0; i < row; i++) {
        if(queens[i] === col || queens[i] - i === col - row || queens[i] + i === col + row) {
            return false;
        }
    }
    return true;
}

function solveNQueens(queens, row, n, solutions) {
    if(row === n) {
        solutions.push([...queens]);
        return true;
    }
    for(let col = 0; col < n; col++) {
        if(isSafe(queens, row, col, n)) {
            queens[row] = col;
            if(solveNQueens(queens, row + 1, n, solutions)) {
                return true;
            }
            queens[row] = -1;
        }
    }
    return false;
}

function solve(q) {
    const n = q;
    const queens = new Array(n).fill(-1);
    const solutions = [];
    solveNQueens(queens, 0, n, solutions);
    return solutions.map(sol => {
        const board = [];
        for(let row of sol) {
            const r = [];
            for(let i = 0; i < n; i++) {
                r.push(row === i ? 'Q' : '.');
            }
            board.push(r.join(''));
        }
        return board;
    });
}
