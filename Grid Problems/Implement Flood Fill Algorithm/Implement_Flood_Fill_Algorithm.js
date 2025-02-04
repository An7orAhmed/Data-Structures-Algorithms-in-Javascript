function floodFill(grid, row, col, newRowColor, originalColor) {
    if (grid[row][col] === newRowColor) {
        return grid;
    }
    
    let queue = [];
    grid[row][col] = newRowColor;
    queue.push({row, col});
    
    while (queue.length > 0) {
        let curr = queue.shift();
        let currentRow = curr.row;
        let currentCol = curr.col;
        
        // Check all four directions
        if(currentRow-1 >= 0 && grid[currentRow - 1][currentCol] === originalColor) {
            grid[currentRow - 1][currentCol] = newRowColor;
            queue.push({row: currentRow - 1, col: currentCol});
        }
        if(currentRow + 1 < grid.length && grid[currentRow + 1][currentCol] === originalColor) {
            grid[currentRow + 1][currentCol] = newRowColor;
            queue.push({row: currentRow + 1, col: currentCol});
        }
        if(currentCol - 1 >= 0 && grid[currentRow][currentCol - 1] === originalColor) {
            grid[currentRow][currentCol - 1] = newRowColor;
            queue.push({row: currentRow, col: currentCol - 1});
        }
        if(currentCol + 1 < grid[0].length && grid[currentRow][currentCol + 1] === originalColor) {
            grid[currentRow][currentCol + 1] = newRowColor;
            queue.push({row: currentRow, col: currentCol + 1});
        }
    }
    return grid;
}

// Usage example:
let grid = [
    ['B','B','B','B'], 
    ['B','A','A','B'], 
    ['B','A','A','B'], 
    ['B','B','B','B']
];
        
let newGrid = floodFill(grid,1,1,"R","A");
console.log(newGrid);