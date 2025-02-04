function uniquePaths(rows, cols) {
    // Create a DP table initialized with 1s
    let dp = Array(rows).fill().map(() => Array(cols).fill(1));
    
    // Fill DP table
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[rows-1][cols-1];
}

