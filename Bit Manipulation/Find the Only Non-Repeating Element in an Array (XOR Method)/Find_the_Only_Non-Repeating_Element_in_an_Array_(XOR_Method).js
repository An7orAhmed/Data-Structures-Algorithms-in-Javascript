function findNonRepeating(arr) {
    let xorResult = 0;
    for (let num of arr) {
        xorResult ^= num;
    }
    return xorResult;
}