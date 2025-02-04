function solveRatInMaze(maze, n) {
    // Queue to hold current position and path
    let queue = [];
    queue.push({ coords: [0, 0], path: [[0, 0]] });
    
    // Directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // Visited set to keep track of visited positions
    let visited = new Set();
    visited.add('0,0');
    
    while (queue.length > 0) {
        let current = queue.shift();
        
        // Check if current position is the destination
        if (current.coords[0] === n-1 && current.coords[1] === n-1) {
            return current.path;
        }
        
        // Explore all possible directions
        for (let dir of directions) {
            let newX = current.coords[0] + dir[0];
            let newY = current.coords[1] + dir[1];
            
            // Check if new position is valid
            if (newX >= 0 && newX < n && newY >= 0 && newY < n && maze[newX][newY] === 0) {
                let key = `${newX},${newY}`;
                if (!visited.has(key)) {
                    visited.add(key);
                    let newPath = current.path.slice();
                    newPath.push([newX, newY]);
                    queue.push({ coords: [newX, newY], path: newPath });
                }
            }
        }
    }
    
    // If no path found
    return null;
}