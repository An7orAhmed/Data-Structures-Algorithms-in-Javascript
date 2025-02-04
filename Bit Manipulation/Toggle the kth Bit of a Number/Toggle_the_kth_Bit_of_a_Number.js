function toggleKthBit(number, k) {
    const mask = 1 << k; // Create a mask with kth bit set
    return number ^ mask; // Toggle the kth bit using XOR
}