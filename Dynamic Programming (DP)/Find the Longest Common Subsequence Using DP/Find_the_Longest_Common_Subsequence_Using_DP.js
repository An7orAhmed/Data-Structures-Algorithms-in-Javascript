function longestCommonSubsequence(a, b) {
    // Create a table to store lengths of longest common subsequence
    const dp = Array(a.length + 1).fill(0).map(() => Array(b.length + 1).fill(0));
    
    // Fill the dp table
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Reconstruct the LCS from dp table
    let i = a.length, j = b.length;
    let lcs = [];
    while (i > 0 && j > 0) {
        if (a[i - 1] === b[j - 1]) {
            lcs.push(a[i - 1]);
            i--;
            j--;
        } else {
            dp[i - 1][j] > dp[i][j - 1] ? i-- : j--;
        }
    }
    
    // Reverse to get the correct order
    return lcs.reverse().join('');
}