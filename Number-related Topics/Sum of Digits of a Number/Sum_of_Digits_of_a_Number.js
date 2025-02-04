
function sum_of_digits(number) {
    let sum = 0;
    const numStr = Math.abs(number).toString();
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i], 10);
    }
    return sum;
}
