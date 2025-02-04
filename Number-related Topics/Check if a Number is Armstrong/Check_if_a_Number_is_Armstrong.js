function isArmstrong(num) {
    const digits = num.toString();
    const power = digits.length;
    let sum = 0;
    for (let i = 0; i < power; i++) {
        const digit = parseInt(digits[i], 10);
        sum += Math.pow(digit, power);
    }
    return sum === num;
}
