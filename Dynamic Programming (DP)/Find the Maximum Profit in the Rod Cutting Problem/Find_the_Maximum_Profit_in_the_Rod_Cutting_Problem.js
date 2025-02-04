function rodCutting(n, values) {
    let dp = new Array(n + 1).fill(0);
    
    for(let i = 1; i <= n; i++) {
        let maxProfit = 0;
        for(let j = 1; j <= i; j++) {
            maxProfit = Math.max(maxProfit, values[j] + dp[i - j]);
        }
        dp[i] = maxProfit;
    }
    
    return dp[n];
}
