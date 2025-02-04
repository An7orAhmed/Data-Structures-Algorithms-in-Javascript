A Power of Two is a number that can be expressed as 2 raised to an integer power. Common examples include 1, 2, 4, 8, 16, etc.

To determine if a number is a power of two using JavaScript, we can utilize bitwise operations. The approach is based on the fact that powers of two in binary representation have exactly one '1' bit. For instance, 8 is 1000 in binary. Subtracting 1 from 8 gives 7, which is 0111 in binary. Performing a bitwise AND operation between 8 and 7 yields 0. This property holds true for all powers of two.

Thus, the JavaScript function checks if the number is positive and if the result of this bitwise operation is zero.

Here's the code:

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

