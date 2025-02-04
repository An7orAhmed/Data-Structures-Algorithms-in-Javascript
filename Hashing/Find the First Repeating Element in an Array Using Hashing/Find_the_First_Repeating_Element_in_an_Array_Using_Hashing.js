function findFirstRepeatingElement(array) {
    const seen = {};
    for (let i = 0; i < array.length; i++) {
        if (seen[array[i]]) {
            return array[i];
        } else {
            seen[array[i]] = true;
        }
    }
    return null;
}
