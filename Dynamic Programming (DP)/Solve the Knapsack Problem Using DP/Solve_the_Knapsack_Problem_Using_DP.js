function solveKnapsackDP(capacity, items) {
    const n = items.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        const [weight, value] = items[i - 1];
        for (let w = 1; w <= capacity; w++) {
            if (weight > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
            }
        }
    }
    
    let resultValue = dp[n][capacity];
    let w = capacity;
    const includedItems = [];
    
    for (let i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            includedItems.push(items[i - 1]);
            w -= items[i - 1][0];
        }
    }
    
    return { totalValue: resultValue, includedItems: includedItems };
}

