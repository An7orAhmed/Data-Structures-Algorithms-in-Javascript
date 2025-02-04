
function reverseNumber(num) {
    let isNegative = num < 0;
    let reversedNum = parseInt(Math.abs(num).toString().split('').reverse().join(''), 10);
    return isNegative ? -reversedNum : reversedNum;
}
