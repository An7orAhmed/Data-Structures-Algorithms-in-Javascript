function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    const gcd = findGCD(a, b);
    if (a === 0 || b === 0) {
        return 0;
    }
    return (a * b) / gcd;
}

