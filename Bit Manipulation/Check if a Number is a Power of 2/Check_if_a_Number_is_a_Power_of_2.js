function isPowerOfTwo(num) {
    if (num <= 0) return false;
    const binary = num.toString(2);
    const ones = binary.split('0');
    return ones.length === 1;
}