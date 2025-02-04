function countSetBits(n) {
    let count = 0;
    while (n > 0) {
        n &= n - 1; // Turn off the rightmost set bit
        count++;
    }
    return count;
}