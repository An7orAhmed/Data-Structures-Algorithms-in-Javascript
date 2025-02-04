function editDistance(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));

    // Base Case: If first string is empty, only option is to insert all characters of second string
    for(let i=0; i<=m; i++) {
        dp[i][0] = i;
    }
    
    // Base Case: If second string is empty, only option is to remove all characters of first string
    for(let j=0; j<=n; j++) {
        dp[0][j] = j;
    }

    // Fill the dp table
    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
        }
    }

    return dp[m][n];
}
