function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
