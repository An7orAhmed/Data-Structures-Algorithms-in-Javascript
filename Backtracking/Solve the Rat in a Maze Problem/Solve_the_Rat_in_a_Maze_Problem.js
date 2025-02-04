
function moveRat(maze, currentRow, currentCol, path) {
    const n = maze.length;
    if (currentRow === n - 1 && currentCol === n - 1) {
        return true;
    }
    // Directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let [dr, dc] of directions) {
        let newRow = currentRow + dr;
        let newCol = currentCol + dc;
        if (isValid(maze, newRow, newCol) && !path.includes(`${newRow},${newCol}`)) {
            path.push(`${newRow},${newCol}`);
            if (moveRat(maze, newRow, newCol, path)) {
                return true;
            }
            path.pop();
        }
    }
    return false;
}

function isValid(maze, row, col) {
    const n = maze.length;
    return row >= 0 && row < n && col >= 0 && col < n && maze[row][col] === 0;
}

