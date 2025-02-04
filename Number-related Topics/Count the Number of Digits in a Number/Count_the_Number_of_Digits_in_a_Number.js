
function countDigits(number) {
    if (number === 0) return 1;
    const numStr = Math.abs(number).toString();
    return numStr.length;
}

