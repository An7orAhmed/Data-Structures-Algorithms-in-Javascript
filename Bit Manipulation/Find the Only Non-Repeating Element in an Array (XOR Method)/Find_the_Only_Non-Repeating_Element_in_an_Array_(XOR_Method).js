function findNonRepeatingElement(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}
