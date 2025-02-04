width, height = grid[0].length, grid.length

function countIslands(grid) {
    if (!grid || grid.length === 0) return 0

    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++
                dfs(grid, i, j)
            }
        }
    }
    return count
}

function dfs(grid, i, j) {
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j] === "1") {
        grid[i][j] = "#"
        dfs(grid, i+1, j)
        dfs(grid, i-1, j)
        dfs(grid, i, j+1)
        dfs(grid, i, j-1)
    }
}
