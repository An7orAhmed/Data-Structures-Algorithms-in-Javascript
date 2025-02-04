function rotateArray(arr, k) {
    const effectiveK = k % arr.length;
    return [...arr.slice(-effectiveK), ...arr.slice(0, arr.length - effectiveK)];
}

