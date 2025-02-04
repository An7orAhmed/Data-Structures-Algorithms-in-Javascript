function firstRepeatingElement(arr) {
    const seen = {}; // Hash map to track seen elements
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return arr[i]; // Found the first repeating element
        } else {
            seen[arr[i]] = true; // Mark element as seen
        }
    }
    return undefined; // No repeating element found
}