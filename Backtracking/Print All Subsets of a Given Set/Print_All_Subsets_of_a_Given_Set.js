function printAllSubsets(arr) {
    const n = arr.length;
    const totalSubsets = Math.pow(2, n);

    for (let i = 0; i < totalSubsets; i++) {
        let subset = [];
        let binary = i.toString(2).padStart(n, '0');

        for (let j = 0; j < n; j++) {
            if (binary[j] === '1') {
                subset.push(arr[j]);
            }
        }

        console.log(`Subset ${i + 1}: ${subset.join(', ')}`);
    }
}

// Example usage:
printAllSubsets([1, 2, 3]);