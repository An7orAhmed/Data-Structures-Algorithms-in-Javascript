function isArmstrong(number) {
    const digits = String(number).length;
    let sum = 0;
    for(let i = 0; i < digits; i++) {
        const digit = number % 10;
        sum += Math.pow(digit, digits);
        number = Math.floor(number / 10);
    }
    return sum === number;
}
console.log(isArmstrong(153)); // Output: true