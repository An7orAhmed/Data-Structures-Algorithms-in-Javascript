function fibonacci(n) {
    let memo = {};
    function fibHelper(x) {
        if (x in memo) {
            return memo[x];
        }
        if (x === 0) {
            return 0;
        }
        if (x === 1 || x === 2) {
            return 1;
        }
        memo[x] = fibHelper(x - 1) + fibHelper(x - 2);
        return memo[x];
    }
    return fibHelper(n);
}

