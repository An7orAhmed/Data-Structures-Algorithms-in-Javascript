function findShortestPath(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));
    const queue = [];
    
    // Starting point
    queue.push({row: 0, col: 0, path: [[0, 0]]});
    visited[0][0] = true;
    
    // Directions: up, down, left, right
    const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        // Check if current position is the destination
        if (current.row === rows - 1 && current.col === cols - 1) {
            return current.path;
        }
        
        // Explore neighbors
        for (const dir of directions) {
            const newRow = current.row + dir.row;
            const newCol = current.col + dir.col;
            
            // Check if new position is valid
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                if (!visited[newRow][newCol] && grid[newRow][newCol] === 0) {
                    visited[newRow][newCol] = true;
                    const newPath = [...current.path, [newRow, newCol]];
                    queue.push({row: newRow, col: newCol, path: newPath});
                }
            }
        }
    }
    
    // If no path found
    return null;
}

